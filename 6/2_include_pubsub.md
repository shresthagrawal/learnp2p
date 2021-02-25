# Wiring up the node

Now that we're shifting our implementation of the chat from a custom libp2p protocol to a pubsub model, we have a couple of to-dos.

First, we need to update our node configuration. Libp2p has a specific configuration in the `options` object for pubsub where we need to specify that our node support pubsub and then what implementation of pubsub it uses. We're going to use `gossipsub` as that's the current preferred implementation for libp2p. This is a separate library from so the main js-libp2p so we will need to install this dependency as well.

Second, we need to remove the protocol handler defined `libp2p.handle` for our node and replace it with the pubsub class implemented in section 6.1. We also have to bind our standard input event listener to the `send` function defined in our pubsub class instead of the chat protocol.

### Try it yourself

- `require` your pubsub class in your node
- Install the `libp2p-gossipsub` dependency and `require` it in your node
- Add a `pubsub` section to your node's `options` configuration object and set it to `gossipsub`
- Replace the `libp2p.handle` function with the instantiation of a pubsub object and pass your libp2p node and a topic to it
- Redirect standard input to the `send` function from your pubsub class
- Run the boostrap node and a second node.
- Try typing something in the terminal where the second node is running and then verify that you see that text appear on the bootstrap node's terminal

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/6/6.2-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/6/6.2-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/5/5.2-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
