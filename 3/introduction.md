Secure Connection
==============

Libp2p has [connection encryption](https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md#connection-encryption) interface to easily plug use any encryption method.  This can be configured by setting the `connEncryption` in node options.  This will make sure every transport message is encrypted using the provide method.   

## Who cares about encryption anyway?
Several of the transport modules that libp2p supports do not have native encryption so data would be sent in plain text between nodes.  At the moment, our chat application is configured this way and sends data as plain text which is exactly what it sounds like. Basically, this means that anyone who can intercept the traffic flowing between nodes using the chat application can read what's being sent.  I don't know about you but I don't want to use a messaging system where just anybody can read my messages.  I want to make sure only the people I'm sending the messages to can actually read them and that's what encryption does for us.

## What's going on under the hood?
The general flow for all libp2p encryption module goes as follows:
 * Your node writes data into the outbound connection stream
 * Libp2p encrypts that data using the public key of the node you're talking to.
 * That encrypted message gets sent over the internet using the specified transport module
 * The remote node receives the data and decrypts it using its private key
 * The remote node processes the decrypted data and outputs according to whichever protocol you're using.  In the case of our chat application, it prints the message to the screen

## More resources
If you want a better understanding of how encryption works and the difference between symmetric and asymmetric encryption, [here's](https://wordtothewise.com/2014/09/cryptography-alice-bob/) a good article that gives an overview through the possibly familiar story of Alice and Bob.

## What are the options?
Libp2p offers two encryption modules, [secio](https://github.com/libp2p/js-libp2p-secio) and [noise](https://github.com/NodeFactoryIo/js-libp2p-noise) though you could also conceivably build your own.  Regardless of which one you choose, under the hood, libp2p will use that encryption library to secure the communication channel. It is important for all the communicating nodes to use the same encryption method to establish a successful connection. 

Now that we have a basic picture of why encryption is important and how it's used in libp2p, let's implement it in our chat application.
