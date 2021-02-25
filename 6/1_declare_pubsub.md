# Getting in and getting out

Now that we have our basic class structure laid out, its time to get into the details. The libp2p API specifies a number of functions for pubsub under the `libp2p.pubsub` namespace that we will use in the implementation details of our chat class. In particular, we will use the `subscribe`, `unsubscribe`, and `publish` functions to join/leave a specific chatroom and then send messages to that chatroom. The full pubsub API can be found [here](https://github.com/libp2p/js-libp2p-pubsub).

### Try it yourself

- Tell libp2p to start the node in the `start` function
- Tell libp2p to stop the node in the `stop` function
- Use `libp2p.pubsub.subscribe` to subscribe to the topic defined in the constructor in your `join` function
- Use `libp2p.pubsub.unsubscribe` to unsubscribe from the topic in the `leave` function
- Use `libp2p.pubsub.publish` to send a message to the topic in the `send` function

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/6/6.1-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/6/6.1-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/6/6.0-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
