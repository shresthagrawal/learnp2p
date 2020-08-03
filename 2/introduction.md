Peer Identity in Libp2p and the Future
======================================

### Peer Identity
Libp2p is intended to be a future-proof, modular networking protocol where you can pick the features you want in your stack.  The best example of how both of these goals are accomplished in libp2p is through the use of the multiaddress.  Before we dig into multiaddresses and how they future-proof libp2p efficiently, we have to talk about identity and what it means in libp2p.  

In any sort of networking environment, you need a way to uniquely identify the nodes on the network.  This is the idea of peer identity, what you might call an address, a unique piece of data a node uses to identify itself to the world.  IP addresses or MAC addresses are good examples of an address used to identify servers and devices within networks of various types.

In libp2p, peer identity is established using the concept of a [multiaddress](https://docs.libp2p.io/concepts/addressing/). The concept of multiaddress in the libp2p world is that of an efficient, human-readable, composable address format that can be easily understood by humans and also efficiently machine-readable.  As the name suggests, a multiaddress can have multiple pieces that identify different parts of the libp2p network stack that a particular node employs.  A typical libp2p multiaddress might look like `/ip4/127.0.0.1/udp/1234/p2p/Qme6rx1jPcJRmjhdqo6jiPjmG9hnk3uLGb5NbuKPNvur6V`.  Let's break this down.

* `/ip4/127.0.0.1` identifies the base networking address, here an IP address that follows the [IPv4 standard](https://en.wikipedia.org/wiki/IPv4) that corresponds to the real, physical network address that other nodes must use to connect to the computer or device the current node is running on
* `/udp/1234` specifies the transport method used, UDP, in this case, and the port the node is listening on
* `/p2p/Qme6rx1jPcJRmjhdqo6jiPjmG9hnk3uLGb5NbuKPNvur6V` specifies that the node speaks libp2p and then the PeerId that identifies the specific node we want to connect to.  Conceivably you could have multiple nodes listening on a single IP address, transport type, and port, so this PeerId is important to provide when providing a multiaddress to other nodes

Now, you can take this address and provide it to all the peer nodes you want to be able to communicate to your local node and you can be confident that other nodes will be able to identify you correctly.  See the [Multiaddress spec](https://github.com/multiformats/multiaddr) for all the details of how multiaddresses can be constructed.
It's multiaddresses of this sort that will enable our p2p chat client to identify the specific peer nodes we want to communicate with.

### Libp2p as a future-proof protocol
Why is this multiaddress so critical to making libp2p future-proof?  Going back to our multiaddress example, what happens if the world changes and everyone drops support for UDP?  If everyone suddenly stops using UDP and switches over to transport protocl XYZ, will we no longer be able to use libp2p?  Or, to put it less bleakly, what if a hot new transport layer ABC comes along that promises hyper-fast, lossless packet delivery with guaranteed replayability, perfect security, and blah blah blah and tnen an enterprising dev builds out a new libp2p transport module that supports it?  Can our chat app start supporting that new transport method?  

Of course, it's as simple as adding a new configuration item to your node setup and then instead of just `/ip4/127.0.0.1/udp/1234/p2p/Qme6rx1jPcJRmjhdqo6jiPjmG9hnk3uLGb5NbuKPNvur6V` being your node's only multiaddress, you now have another one `/ip4/127.0.0.1/abc/1234/p2p/Qme6rx1jPcJRmjhdqo6jiPjmG9hnk3uLGb5NbuKPNvur6V` and your node can make connections using either transport method.  And this modularity is built into the DNA of libp2p so exists across the entire stack.  You can switch out security modules, peer discovery mechanisms, stream multiplexing methods.  Even when defining your own custom protocols that run on top of libp2p, it has [semantic versioning support](https://docs.libp2p.io/concepts/protocols/#matching-protocol-ids-and-versions) out of the box.  

So, future-proofing just means that libp2p is designed as a stack that won't break when the world changes.  Unless the entire concept of networking as is  Web 1.0/2.0/3.0 understand it disappears and is replaced by something else, libp2p will still be able to function, regardless of what new modules get developed and added to the stack.

So, let's try it out and see.
