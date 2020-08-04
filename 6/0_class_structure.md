Defining our pubsub implementation
==================================

To simplify our pubsub integration for the chat app, we're going to define a class that abstracts the libp2p implementation details of our chat app into the basic functions necessary for starting/stopping the chat app and then joining, leaving, and sending messages to a group within the app.

Then, let's also define a constant `pubsub.topic = '/chat/1.0.0'`.  When we get integrate the pubsub class into our node, we're going to move the chat functions out of a libp2p custom protocol and make it the topic that our nodes subscribe to using pubsub.

### Try it yourself
 * Define a class with a constructor that takes a libp2p node and a topic and then starts the node if it's not already active
 * Add class functions for `start`, `stop`, `join`, `leave`, and `send`
    - Hint, make sure these functions are asynchronous since this is peer to peer and things don't always happen as quickly as we like. 
 * Make the class the default export 
 * Create a named export `TOPIC` that is defined as a constant that references the current chat protocol name `/chat/1.0.0`

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/6/6.0-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/6/6.0-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.0-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->