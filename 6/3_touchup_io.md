# Making it pretty

Now we have a functioning chat app that's entirely peer to peer, secured by the noise encryption protocol, and able to initiate and maintain group chats. The only thing left to do is to clean up the output and make it look like an actual chat app.

## What's your name?

All good messaging platforms make it clear who says what. Our current pubsub implementation is just printing messages it receives to the screen without telling the user where the messages came from. In the `libp2p.pubsub.subscribe` function, we define the callback that is executed when a new message is received on the subscribed topic and the message object passed to that callback contains the `peerId` of the node that sent the original message. Let's use the last four characters of the sending node's peerId as a node's nickname when displaying messages.

## Do I hear an echo?

You may have noticed that the current implementation of pubsub echoes your messages back to you in the original terminal window and also duplicates new lines. This is because the pubsub class is blindly publishing everything it receives from `stdin` as a message under the topic. Due to the way messages bounce around the network under `gossipsub`, your node is receiving back the message it sent and then blithely printing it back to the terminal without bothering to check if it was the same message just sent out. Let's fix that. In the `libp2p.pubsub.subscribe` callback, let's check if a message was originally sent by our own node and if so, let's print the terminal escape sequence `\033[1A` which will delete our input, move the cursor up a line, and then print the sending node's nickname followed by the message.

## Try it yourself

- Define a terminal escape sequence `CLEARLINE` that will delete duplicate output
- Update the callback on the `libp2p.pubsub.subscribe` call in the `join` function of your `pubsub` class as follows:
  - Set a user name variable the last four characters of the sending node's `-peerId`
  - Use a template string literal to format the message in the form
  ```javascript
  ;`${userName}: message`
  ```
  - If the sending peer's `peerId` matches our node, insert the `CLEARLINE` terminal sequence into the tempate literal.
- Run the bootstrap and secondary node and see the beautiful, complete chat app!

Our work here is done.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/6/6.3-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/6/6.3-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/6/6.2-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
