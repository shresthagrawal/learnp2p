Pubsub - it's a party now
=========================

So far, our adventures in libp2p have all been about building nodes that only talk bidirectionally. In other words, only peer can talk to one peer and no group conversations.  
To solve this problem decentralised systems use Pubsub in short for publish/subscribe. A node can subscribe any interested topic to start receiving the messages. Once a node is subscribed to a topic it can also publish messages. Once a message is published under any given topic it gets relayed among all nodes subscribed to that topic.
 
Libp2p provides an implementation `pubsub` module called `gossipsub` and the full implementation details can be found [here](https://docs.libp2p.io/concepts/publish-subscribe/).  The high-level idea of how this works is that as nodes join the network and discover one another using any of the various methods covered in section 4, they also query all other discovered nodes to see if they support pubsub, and if so, the new peers are added to the node's `peerStore` with the annotation that they support pubsub.  Once discovered, the node then creates a subset of these pubsub-supporting peers to be its full-message peers and it relays all published messages it receives to these peers.  As such, messages bounce around the network and peers retransmit messages they haven't seen before and this helps ensure that all nodes receive all messages.  

So, let's get down to business.  In this section, we're going to add pubsub to our node's configuration, implement the details of it within the chat protocol, and roll out a full-on chat app, capable of support both direct and group messaging, all in a decentralised fashion unlike Facebook, WhatsApp, or any other centralised system which have a single point of failure.
