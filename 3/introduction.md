# Secure Connection

In the last section we were able to dail to our bootstrap. Before we actually start sending messages we need to make sure that only the reciever of the message can read the message. In decentralised network terms we need encrypt every message using asymetric cryptography (Don't worry if you dont understand the term).

## What are the options?

Libp2p offers two encryption modules, [secio](https://github.com/libp2p/js-libp2p-secio) and [noise](https://github.com/NodeFactoryIo/js-libp2p-noise) . Regardless of which one you choose, under the hood, libp2p will use that encryption library to secure the communication channel.

Thought it is not recommended but you could also build your own encryption module using [connection encryption](https://github.com/libp2p/js-libp2p/blob/master/doc/CONFIGURATION.md#connection-encryption) interface provided by libp2p.

It is important for all the communicating nodes to use the same encryption method to establish a successful connection.

## More resources

If you want a better understanding of how encryption works and the difference between symmetric and asymmetric encryption, [here's](https://wordtothewise.com/2014/09/cryptography-alice-bob/) a good article that gives an overview through the possibly familiar story of Alice and Bob.

Now that we have a basic picture of why encryption is important and how it's used in libp2p, let's implement it in our chat application.
