## Kademlia

Kademlia is a peer-to-peer distributed hash table implementation. It is most known for its use of the XOR metric in its peer discovery and routing strategy.

XOR metric allows to calculate the distance between 2 nodes in the overlay network as the bit-wise exclusive or (XOR) of their keys.

In the `js-libp2p` implementation of Kademlia, the hashing function is a SHA-256 hash for identifiers.

### Why XOR metric is so rewarding?

Using this metric to choose which nodes to hop to based on a request makes it highly probable to take at most c \* log(n) steps to locate any node in the network, where n is the number of nodes and c is a constant. The distance therefore is unique and not ambiguous between nodes with close keys.

Compared to the Euclidean Distance which is calculated as |a - b| (e.g. |3 - 5| = 2), XOR Distance is calculated as |a ^ b| (e.g. 3 ^ 5 = 6 in decimal; 011 ^ 101 = 110 in binary). More information on XOR operation can be found [here](https://en.wikipedia.org/wiki/XOR_gate#Applications "XOR Operation Applications on Wikipedia").

Therefore, Kademlia stores information at the k closest nodes to the object's IDs and the distance between it and each node is the same as from the nodes to the information (different from the distance used in [Chord](<https://en.wikipedia.org/wiki/Chord_(peer-to-peer)> "Chord on Wikipedia"), another DHT implementation).

### Searching in Kademlia

[VISUAL]

Each node in this network is represented by a circle and each one has its own simple identifier. `Node 0` is connected to `nodes 1, 2, 4 and 8` in this example.

Let's step through the process of a search query coming from `node 0` and hopefully arriving at `node 15`.

Below is an abstraction of `node 0`'s peer routing table in the context of finding `node 15`:
| Node 0 Routing Table | XOR Distance to Node 15 |
|:--------------------:|:-----------------------:|
| Node 1 | 14 (\|1^15\|) |
| Node 2 | 13 (\|2^15\|) |
| Node 4 | 11 (\|4^15\|) |
| Node 8 | 7 (\|8^15\|) |

In order to begin searching for `node 15`, `node 0` contacts `node 8` which is the closest (lowest XOR distance) `node 0` knows to `node 15`<sup>1</sup>.

<sup>1</sup> _In `libp2p-kad-dht` and other S/Kademlia inspired DHT implementations, multiple closest nodes are contacted for each search request to increase the probability of finding the node faster/with less hops._

Let's assume that `node 8` doesn't have `node 15` in its own routing table and therefore it instead sends `node 0` back information of its closest (lowest XOR distance) known node to `node 15`, which in this example we will assume to be `node 12`.

`Node 0` now has the information it needs to establish contact with `node 12` and proceeds to query `node 12` for information on `node 15`.

To demonstrate another iteration of node lookup, we shall again assume that `node 12` does not have `node 15` in its peer table, but knows of `node 14`.
`Node 12` therefore responds to `node 0` by sending back `node 14`'s information.

`Node 0` repeats the iteration again with `node 14` and finally, `node 14` has `node 15` in its peer table and can reply successfully with the full information it knows regarding `node 15`.

If the case were that `node 15` would be unreachable, either from not being awake or NAT issues, the search query would be unsuccessful. `Node 0` would not be able to connect to this node and would likely perform multiple connection attempts with some increasing time-out in-between (depending on the implementation).

In summary, each node stores partial network topology information; a local view of some subset of the network where said subset contains more information about nodes closest to them, and exponentially less information about nodes the further away they are in XOR distance.
In such a Kademlia network with successful bootstrapping and therefore no partitioning, piecing together each node's local view provides a provably complete global overlay network, where every node is reachable in a maximum of `log(n)` hops (where `n` is the total number of nodes in the network).

### How does the routing table help in sharing and searching information?

Kademlia works by maintaining a routing table, a way to look up and store nodes that are of interest to each node.

These nodes choose a selected number of entries to keep in the list of their known peers and to form a data structure called `K-Buckets`.
Every time they come into contact through requests with other nodes, they can update their routing table to maintain the stabler and longer connections, and to keep the most (profitable) connections (those at key positions away from the node).

Multiple other techniques are used to keep the network running and to keep it secure.
