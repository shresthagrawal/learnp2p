## Kademlia

Kademlia is a peer-to-peer distributed hash table implementation. It is most known for its use of the XOR metric in its peer discovery and routing strategy.

XOR metric allows to calculate the distance between 2 nodes in the overlay network as the bit-wise exclusive or (XOR) of their keys.

In the `js-libp2p` implementation of Kademlia, the hashing function is a SHA-256 hash for identifiers.

### Why XOR metric is so rewarding?

Using this metric to choose which nodes to hop to based on a request makes it highly probable to take at most c * log(n) steps to locate any node in the network, where n is the number of nodes and c is a constant. The distance therefore is unique and not ambiguous between nodes with close keys.

Compared to the Euclidean Distance which is calculated as |a - b| (e.g. |3 - 5| = 2), XOR Distance is calculated as |a ^ b| (e.g. 3 ^ 5 = 6 in decimal; 011 ^ 101 = 110 in binary). More information on XOR operation can be found [here](https://en.wikipedia.org/wiki/XOR_gate#Applications "XOR Operation Applications on Wikipedia").

Therefore, Kademlia stores information at the k closest nodes to the object's IDs and the distance between it and each node is the same as from the nodes to the information (different from the distance used in [Chord](https://en.wikipedia.org/wiki/Chord_(peer-to-peer) "Chord on Wikipedia"), another DHT implementation).

### Searching in Kademlia

[VISUAL]

Each node in this network is represented by a circle and each one has its own simple identifier. Node 0 is connected to nodes 1, 2, 4 and 8 in this example. 

Let's step through the process of a search query coming from node 0 and hopefully arriving at node 15.

In order to search for node 15, node 0 contacts node 8 which is the closest node 0 knows to node 15. Node 8 doesn't have node 15 in its own routing table, therefore it asks the nodes in its routing table, which are closest to node 15, if they know node 15. The query hops from node 8 to node 12, then onto node 14 in the same manner. Node 14 knows node 15 and therefore the search query is successful and node 0 gets to connect to node 15.

If the case were to be that node 15 would be unreachable, either from not being awake or not being present in any node's closest peers, the search query would be unsuccessful and node 0 would not be able to connect to this node.

Each node therefore has partial information, local view, about the network, though the network in a global view is complete.

### How does the routing table help in sharing and searching information?

Kademlia works by maintaining a routing table, a way to look up and store nodes that are of interest to each node.

These nodes choose a selected number of entries to keep in the list of their known peers and to form a data structure called `K-Buckets`. 
Every time they come into contact through requests with other nodes, they can update their routing table to maintain the stabler and longer connections, and to keep the most (profitable) connections (those at key positions away from the node).

Multiple other techniques are used to keep the network running and to keep it secure.