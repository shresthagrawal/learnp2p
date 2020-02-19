What is transport?
==================
TODO: Add a cool gif about transports
lets break it!

## What does transport means in p2p system?
As the word transport says it does transportation, but of data between two peers. Currently our internet supports multiple standards of communication. Eg. tcp, websockets, mqtt, etc. Every standard is just a set of rules that both communicating parties have to follow in order for a succesfull comunication. 
>TODO: Verify and add transports. For each transport link to the official documentation to show how they differ in the core implementation but still have the same functionalities. 

In a p2p system it might be not clear which of these standards does the other party supports. As the standards are drastically different it would be hard for a p2p system to implement each one from scratch. 

## This is where transports of libp2p comes
One thing which is very clear though every transport is very different in the core implementation it has certain operations in common eg. dialing other user, recieving packets, etc.
>TODO: Add better examples above.

`libp2p` uses this commonality to come up with an interface (a set of functions) that any module needs to follow in order to be used in an transport. 
>TODO: Link to the documentation of libp2p. 

not only that it also provides the implementation of the most important once. 
>TODO: Link to the list of transport implementation.

Now any one can choose to easily plug any of the transport implementation without any pain. As well as you can also come up with your own transport (lets say `mars-wwq2`) you can follow the interface and that would work with any system that uses libp2p. 

## Use of transport in our awesome-p2p-chat-system
>TODO: explain that in the end you would have a way to communicate with other peers for out chat system

## Additional Reference
>TODO: SimpleAsWater/transports