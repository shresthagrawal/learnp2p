Distributed Hash Tables and a phonebook
--
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

[\Refactor or Removal of this portion (Proposal)]

DHTs are part of the structured overlay network topologies such as Hypercubes, De Bruijn, Butterfiles, Meshes, etc…

[\]

[\Further Consideration]

Some initial implementations of DHTs are Chord, CAN, Pastry, while the ones that are actually used are Kademlia (BitTorrent, The Storm Botnet, Kad (eMule)), and Cassandra (public knowledge).

[\]

## Why the choice of DHTs over other techniques?
DHTs come into play in structured overlay network topologies rather than unstructured ones where techniques like Flooding or Random Walks. These latter techniques are naïve solutions for searching through the network in hope of finding the information they are looking for as fast as possible.

[VISUAL: SCATTERED NODES, MULTIPLE HOPS and CYCLES]

DHTs on the other hand offer a deterministic way / method of finding information on the network as fast as possible while maintaing scalability and managing peer failures when peers leave the network without notice.

## How do DHTs achieve these?
Every implementation of DHT has a set of components which allow them to remain reliable and scalable.  

### Components of a DHT
* Hash Table
* Mapping Function
* Routing Tables
* Routing Algorithm

Each component has distinct features between the implementations, but they share key points between each other. 

Hash Tables are uniformly distributed in a way that each has its own version [FIX (a shifted view for each node (node-related offset))]. The mapping function allows node IDs and item keys to share the same key-space, and it sets rules to map keys to particular nodes. The routing tables are different for each node, containing a table of nodes local in the local key-space, and updating whenever particular nodes join or leave the network.

And the mechanism that makes all of this possible is the routing algorithm, responsible for offering a fast and reliable way to traverse this distributed network.

## Kademlia
Kademlia is a peer-to-peer distributed hash table implementation. It is most known for its use of the XOR metric in its peer discovery and routing strategy.

XOR metric allows to calculate the distance between 2 nodes in the overlay network as the byte-wise exclusive or (XOR) of their keys.

In the js-libp2p implementation of Kademlia, the hashing function is a SHA2-256 hash for identifiers.

### Why XOR metric is so rewarding?
Using this metric to choose which nodes to hop to based on a request makes it possible [Fix (with high probability)] to take at most c * \log(n) steps to locate any node in the network, where n is the number of nodes and c is a constant. The distance therefore is unique and not ambiguous between nodes with close keys.

[\Example: Compared to Euclidean Distance]

Therefore we use XOR metric like: 3^5: 6 (0110); 7^5: 2(0010)

[\]

[\Reformulate]

Therefore, Kademlia stores information at the k closest nodes to the object's IDs and the distance between it and each node is the same as from the nodes to the information (different from the distance used in the Chord DHT implementation).

[\]

Example of a Search

[\EXAMPLE: VISUALIZATION REQUIRED]

0 is connected to 1, 2, 4 and 8

In order to search for 15, it contacts 8 which is the closest, then it asks 8 which of its neighbor peers is close to 15, goes to 12 and asks 12 which of its neighbors is closest to 15, 14 and then 14 knows 15.

[\]

Each node therefore has partial information, local view, about the network, though the network in a global view is complete.

=======

### How does the routing table help in sharing and searching information?

Kademlia works by making a routing table, a way to look up and store nodes that are of interest to each node.

[\Reformulate]

These nodes choose a selected number of entries to keep for each distance in the network to from a data structure called K-Buckets. 
Every time they come into contact through requests with other nodes, they can update their routing table to maintain the stabler and longer connections, and to keep the most (profitable) connections (those at key positions from the node).

[\]

Multiple other techniques are used to keep the network running and to keep it secure.

Try it yourelf.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/4/4.2-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/4/4.2-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/4/4.1-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
