## Secure Communication

As has been noted several times throughout this tutorial, libp2p is a modular network stack and one of the module types available for libp2p is the [connection encryption](https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md#connection-encryption) module type, which is set using the `connEncryption` option when configuring a node.  As the name suggests, this module deals with how data that is sent between two nodes is encrypted using asymmetric encryption.  

Several of the transport modules that libp2p supports do not have native encryption so data would be sent in plain text between nodes.  At the moment, our chat application is configured this way and sends data as plain text which is exactly what it sounds like.  When one node sends data to another, it just sends the messages as plain text, so anyone who is able to intercept or read the data being sent over whatever transport module is being used (i.e. TCP/UDP/Websockets/WebRTC) can read everything that's sent.  I don't know about you but I don't think a chat app is very useful if everything I send to someone else can be read by anyone and then posted all over the internet.  

If you want a better understanding of how encryption works and the difference between symmetric and asymmetric encryption, [here's](https://wordtothewise.com/2014/09/cryptography-alice-bob/) a good article that gives an overview through the possibly familiar story of Alice and Bob.

This is where encryption comes in.  Libp2p offers two encryption modules, [secio](https://github.com/libp2p/js-libp2p-secio) and [noise](https://github.com/NodeFactoryIo/js-libp2p-noise) though you could also conceivably build your own.  Regardless of which one you choose, under the hood, libp2p will use that encryption library to secure the communication channel between your node and the one you're talking to so that prying eyes can't see what you're saying.  Here's how it works:
 * Your node writes data into the outbound connection stream.
 * Libp2p encrypts that data using the public key of the node you're talking to.
 * That encrypted message gets sent over the internet using the transport module your nodes are talking on
 * The remote node receives the data and decrypts it using its private key
 * The node processes the decrypted data and outputs according to whichever protocol you're using.  In the case of our chat application, it prints the message to the screen

All this happens behind the scenes so you as a user of libp2p don't have to think about it at all.  When your node initially connects to another node, it asks the other node if it supports the encryption method specified in your node's configuration.  If not, no connection will ever be established.

Now that we have a basic picture of why encryption is important and how it's used in libp2p, let's implement it in our chat application.
