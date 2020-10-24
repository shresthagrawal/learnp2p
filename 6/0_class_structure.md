# Defining our pubsub implementation

To simplify our pubsub integration for the chat app, we're going to define a class that abstracts the implementation details of pubsub module into simple operations like join, leave, etc. Once we implement pubsub we will replace our custom protocol with the custom chat topic `/chat/1.0.0` that all nodes will connect to join the group chat.

### Try it yourself

- Create a new file named `chat.js`
- Define a class `Chat` with a constructor that takes a libp2p node and a topic and then starts the node if it's not already active
- Add dummy class functions for `start`, `stop`, `join`, `leave`, and `send`
  - Hint, make sure these functions are asynchronous since this is peer to peer and things don't always happen as quickly as we like.
- Make the class the default export
- Create a const export `TOPIC` and initialise it with the chat topic (`/chat/1.0.0`)

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/6/6.0-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/6/6.0-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.0-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
