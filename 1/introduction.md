## Introduction

![Hello GIF](https://media.giphy.com/media/fTI9mBoWLef8k/giphy.gif)

Hello and welcome to the first chapter of **Libp2p-Chat tutorial!** In this chapter we'll be learning about everything about what transports mean and how to add one in our instance. 

## Understanding the Modular Nature of Libp2p

Before, we begin, there's one thing we first need to understand - ***modularity of Libp2p***. One of the core motivations of Libp2p is that it allows you to play and customize with what modules you use for your application. 

Let's say, if you want to build a house. 

![house_gif](https://media.giphy.com/media/xT8qB5POKfq8lGclkQ/giphy.gif)

You'd be needing to think about and specify *a lot of things* such as 
- the size of the house, 
- the number of rooms, 
- the color of the walls, 
- and the type of wood for flooring etc.

In a very similar fashion, if we want to create a Peer to Peer network, we would need to define a lot of things such as 
- the ways to communicate between nodes,
- the protocol for content routing,
- the encryption mechanism to secure data, transaction etc. 

**Libp2p's modularity** makes it really easy to specify these things. (_I mean really, really easy!_)

With Libp2p, you can do some really amazing things -
* ***Try and Test*** out different modules for different layers of the network easily without explicitly implimenting every single module from scratch.

* ***Customize*** the already existing and supported modules to suit your needs. 

* ***Write*** your own modules and use them in combination with the already existing modules effectively.

And so if we revise what Libp2p is - _its not another `n+1th` protocol_ to support p2p networking but a standard library allowing us to easily and effectively _use all the existing `n` protocols_.

Let's proceed into understanding the first subsystem - **Transports**.

![transport](https://media.giphy.com/media/SGn5JVUaufbCLiGEiH/giphy.gif)

What is transport?
==================
As the word *transport* says itself, it does transportation; but of data between two peers. 

Currently our Internet supports multiple standards of communication. These standards are simply a set of rules that both communicating parties have to follow in order for a successful communication over the network. 

Some of these standards include:
The good-old and the most widely used `TCP`, `UDP`, and some new ones like `Web-Sockets` & `Webrtc`, 

These standards are drastically different from each other which makes it difficult for a p2p system to implement each one from scratch. 

## Where libp2p come into play

Before understanding where Libp2p comes into play here, we first need to understand that even though every type of transport is different from each other on the basis of its core implementation and structure, they have certain operations in common *eg. dialing other user, receiving packets, etc.* Libp2p uses this commonality to come up with *an interface* (a set of functions) that any module needs to follow to be used in the transport layer. long with that, Libp2p also provides the [implementation](https://github.com/libp2p/js-libp2p/blob/9ccab40fc81f0667cacba461cdeb42edf3e16c98/doc/CONFIGURATION.md#transport) of the most important ones. 	

Because of this novelty, you can easily choose to plug any of the transport implementation without changing rest of the code. Along with that, you can also come up with your own transport (lets say `mars-wwq2`); by following the same interface, you can enable it to work on any system that uses Libp2p.

#### Additional Reference
-[SimpleAsWater/transports](https://simpleaswater.com/transport/)  
-[Libp2p Glossary](https://simpleaswater.com/libp2p-glossary/)