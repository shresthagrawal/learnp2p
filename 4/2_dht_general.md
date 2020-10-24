## Distributed Hash Tables in General

DHTs are part of the structured [overlay network](https://en.wikipedia.org/wiki/Overlay_network 'Overlay Network on Wikipedia') topologies (Hypercubes, De Bruijn, Butterfiles, Meshes, etc.) They help in keeping track of the virtual connections between the nodes, which correspond to a path, perhaps through many physical links.

You already know about one overlay network, The Internet, which was originally built as an overlay upon the telephone network.

Some initial implementations of DHTs are Chord, CAN, Pastry, while the ones that are actually used are Kademlia (BitTorrent, The Storm Botnet, Kad (eMule)), and Cassandra (public knowledge).

### Why the choice of DHTs over other techniques?

DHTs come into play in structured overlay network topologies rather than unstructured ones where techniques like Flooding or Random Walks. These latter techniques are naive solutions for searching through the network in hope of finding the information they are looking for as fast as possible.

[VISUAL: SCATTERED NODES, MULTIPLE HOPS and CYCLES]

DHTs on the other hand offer a deterministic method of finding information on the network as fast as possible while maintaing scalability and managing peer failures when peers leave the network without notice.

### How do DHTs achieve these?

Every implementation of DHT has a set of components which allow them to remain reliable and scalable.

#### Components of a DHT

- Hash Table
- Mapping Function
- Routing Tables
- Routing Algorithm

Each component has distinct features between the implementations, but they share key points between each other.

Hash Tables are uniformly distributed in a way that each node has its own part of the global hash table. The mapping function allows node IDs and item keys to share the same key-space, and it sets rules to map keys to particular nodes. The routing tables are different for each node, containing a table of nodes local in the local key-space, and updating whenever particular nodes join or leave the network.

The mechanism that makes all of this possible is the routing algorithm, responsible for offering a fast and reliable way to traverse this distributed network.
