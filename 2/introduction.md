## Peer Identity

In any sort of networking environment, you need a way to uniquely identify the nodes on the network. IP addresses or MAC addresses are good examples of an address used to identify servers and devices within networks of various types.

In libp2p, peer identity is established using the concept of a [multiaddress](https://docs.libp2p.io/concepts/addressing/): An efficient address format that can be easily understood by humans and parsable by machines. A typical libp2p multiaddress might look like `/ip4/127.0.0.1/udp/1234/p2p/Qme6rx1jPcJRmjhdqo6jiPjmG9hnk3uLGb5NbuKPNvur6V`.  Let's break this down.

* `/ip4/127.0.0.1` identifies the base networking address, here an IP address that follows the [IPv4 standard](https://en.wikipedia.org/wiki/IPv4)
* `/udp/1234` specifies the transport protocol used and the port the node is listening on
* `/p2p/Qme6rx1jPcJRmjhdqo6jiPjmG9hnk3uLGb5NbuKPNvur6V` specifies that the node speaks libp2p and the PeerId that identifies the specific node. Conceivably you could have multiple nodes listening on a single IP address, transport type, and port, so this PeerId is important to provide when providing a multiaddress to other nodes

Now, you can take this address and provide it to all the peer and you can be confident that other nodes will be able to identify you and communicate with you correctly.  See the [Multiaddress spec](https://github.com/multiformats/multiaddr) for all the details of how multiaddresses can be constructed.

Also the design of multiaddress makes itself future proof. Lets suppose there is a hot new transport layer `COOL`  that promises hyper-fast, lossless packet delivery with guaranteed security, and blah blah blah. Without changing anything on the whole libp2p stack we can have multiaddress like `/ip4/127.0.0.1/COOL/1234/p2p/Qme6rx1jPcJRmjhdqo6jiPjmG9hnk3uLGb5NbuKPNvur6V` that would support our new `COOL` protocol.
