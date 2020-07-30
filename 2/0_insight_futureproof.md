Making future-proof protocols
==============================

Libp2p is intended to be a future-proof networking protocol and also a modular one where you can pick the features you want in your stack.  

## Multiaddress
Libp2p uses the [multiaddress](https://docs.libp2p.io/concepts/addressing/) as a way to future-proof the protocols deployed on it through a flexible, composable addressing specification. A typical libp2p multiaddress might look like `/ip4/127.0.0.1/udp/1234/p2p/Qme6rx1jPcJRmjhdqo6jiPjmG9hnk3uLGb5NbuKPNvur6V`.  Let's break this down.
* `/ip4/127.0.0.1` identifies the base networking address, here an IP address that follows the [IPv4 standard](https://en.wikipedia.org/wiki/IPv4) that corresponds to the real, physical network address that other nodes must use to connect to the computer or device the current node is running on
* `/udp/1234` specifies the transport method used, UDP, in this case, and the port the node is listening on
* `/p2p/Qme6rx1jPcJRmjhdqo6jiPjmG9hnk3uLGb5NbuKPNvur6V` specifies that the node speaks libp2p and then the PeerId that identifies the specific node we want to connect to.  Conceivably you could have multiple nodes listening on a single IP address, transport type, and port, so this PeerId is important to provide when providing a multiaddress to other nodes

Now, you can take this address and provide it to all the peer nodes you want to be able to communicate to your local node and you can be confident that other nodes will be able to identify you correctly.  See the [Multiaddress spec](https://github.com/multiformats/multiaddr) for all the details of how multiaddresses can be constructed.

Try it yourself
---------------
* Install the correct version of the multiaddr library: "^6.1.0" or above
* Add the multiaddrs for tcp and ws for your local node

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.0-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.0-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.3-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
