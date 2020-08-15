## Distributed Hash Tables and a phonebook

A distributed hash table is a data structure where you can store entries connected to a key similarly to hash tables. 

Here is a simple parallel idea we can build upon to create an idea what a DHT is:

You can search for an entry for a key similarly to a phonebook where you look up a telephone number by a name.

[VISUAL]

But a phonebook resembles a centralised system more than a distributed one. Let's distribute it!

You take the phonebook and you separate it into smaller equal-sized pieces, giving these pieces to your friends. In this way, you and your friends hold onto a part of the phonebook.

[VISUAL]

Since you know which one has a particular part of the phonebook, if you want to look up a phone number, you search for your friend and ask him to give you the particular number assigned to the person you are wanting to call.

In the same way, in a distributed network, each peer has a table with peers they know of. When wanting to search through the network, peers contact each other and find information by distributing their request.

[VISUAL]

## js-libp2p-kad-dht

`js-libp2p-kad-dht` is a JavaScript implementation of the Kademlia DHT with some flavour features of the more secure implementation S/Kademlia. 

In order to connect nodes with each other and with content, unique identification for the nodes and the content spread through the network in `js-libp2p` is done using sha2-256 hash:

- hash of the `PeerId` for peers
- hash of the key for contents

### Searching in the network

When wanting to search for a node that is not on your list of nearest peers (your friends in the example above), the identifier of the node being search for is calculated. Then a request is sent to each of the nearest peers to that identifier that the querying node knows. Those peers either respond with their own response if the node is in their table or they send a request to the peers with the closest identifier to the one being search for. This recursive process queries the closest peers to the identifier, continuing until it finds the node or until it has queried all the closest peers.

### Placing information in the network

The hash of the content key is calculated and this identifier is used in the algorithmic process as in "closest peers" above to find the nearest peers to this identifier. At the last step, the identifier of the content is saved by the nearest peers it has found if it is correctly validated or it matches the kind of content stored at that node.

### Gathering information from the network

The hash of the content key is calculated and it goes through nearly the same steps as when placing information on the network except that on each step, if the peer that is being asked knows the identifier, it returns the value (content) of that identifier and the closest peers to that identifier.

### Providing and finding providers of keys

This way of networking wouldn't be complete if nodes wouldn't be able to exchange information on the knowledge of the value for a particular key. Therefore nodes can provide or get this type of information by following the "closest peers" algorithm to notify other nodes of the availability or to find providers for a particular key.

### Getting our implementation up and running

If you would like to learn more about DHTs and Kademlia's implementation, you can check out the following subchapters, [DHTs in General](4/3_dht_general.md) and [Kademlia](4/kademlia.md), otherwise it is time to work on adding our new module.

First, the `libp2p-kad-dht` module has to be loaded by requiring it. Next, in order to properly use this implementation, it has to be added to the modules `dht` entry as the module of our choice and it must be configured.

For the configuration of the `dht` module we have chosen, there are many options that can be set, including even the size of the lists (also known as buckets) used in locating the peers each node knows. We will set `enabled` option for the `dht` to `true` and `randomwalk`, which is a discovery service of peers in the network, with its own `enabled` option to be `true`. 

Now hopefully we have set it up correctly and the nodes in our network will automatically start reaching out to other nodes and exchanging information.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/4/4.2-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/4/4.2-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/4/4.1-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
