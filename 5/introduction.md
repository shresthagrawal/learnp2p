Now that we have understood the basic components of LibP2P. Let's go ahead and jump into building a chat system that can be using Libp2p. Let's start with building a chat protocol between 2 peers. 

Let's say we have a friend in mars whom we want to gift on his birthday. I want to send a card as well as a gift I bought for him. Because it is not easy to send messages to and fro to mars, I cannot afford  to send card and gift seperately, instead what  I do is bundle them together in a gift wrap and send it through space post. Similarly incase of networks as well, a pair of peers might have different applications that need to communicate with each other. Instead of creating a seperate connection for each of the applications which will add to the overheads, I can bundle all the communication together and send it through a single channel. This is called multiplexing.

Libp2p provides an implementation for multiplexing called `libp2p-mplex` and the repository can be found [here](https://github.com/libp2p/js-libp2p-mplex). 

In this module, we will configure Libp2p to use multiplexing, implement the chat protocol which can send messages to connected peers.