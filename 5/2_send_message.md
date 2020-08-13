Fill in the function send message to all
* How to send messages between each other

At the end of this section, we will have a functional chat application. It should be possible to create multiple nodes and chat with connected nodes.

Libp2p's peerstore emits an event when a new peer is connected. We subscribe to this event and establish a connection with the peer thus creating the stream object which can be used to send messages to the peer by using the chat protocol's `Send` method.

# Try it yourself

* Add a listener to listen to the event, when a new peer is added as below
```js
libp2p.peerStore.on('peer', async (peerInfo) => {
}
```
* Using the peerInfo of the newly connected peer, dial a connection to create a stream for the chat protocol as follows
```js
const { stream } = await libp2p.dialProtocol(peerInfo, Chat.PROTOCOL)
```
* Using the created stream to send messages to the peer using the `Send` method of the chat protocol as below
```js
Chat.send(stream)
```

* Run a libp2p node and another bootstrap node so that they connect to each other and you  will have a peer to peer chat application ready to use.



<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/5/5.2-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/5/5.2-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **
[embedded-code-previous](../assets/5/5.1-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->