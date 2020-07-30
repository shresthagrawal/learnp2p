Peer Identity in Libp2p

In any sort of networking environment, you need a way to uniquely identify the nodes on the network.  This is the idea of peer identity, what you might call an address, a piece of data a node uses to identify itself to the world.  IP addresses or MAC addresses are good examples of an address used to identify servers and devices within networks of various types.

In libp2p, peer identity is established using the concept of a multiaddress. The concept of multiaddress in the libp2p world is that of an efficient, human-readable, composable address format that can be easily understood by humans and also efficiently machine-readable.  As the name suggests, a multiaddress can have multiple pieces that identify different parts of the libp2p network stack that a particular node employs.  

`/ip4/127.0.0.1/udp/1234/p2p/Qme6rx1jPcJRmjhdqo6jiPjmG9hnk3uLGb5NbuKPNvur6V` is an example of a multiaddress conforming to the libp2p spec.  We'll break it down in the next section but hopefully you can see some recognizable parts of this address just by looking it and infer some things about the node that uses this particular multiaddress.  

It's multiaddresses of this sort that will enable our p2p chat client to identfy the specific peer nodes we want to communicate with.

Let's go on to the next section and learn how to read and use a multiaddress to understand the identify of any given libp2p node.
