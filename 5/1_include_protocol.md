In this section, we add support for multiplexing and integrate the chat protocol we created in the previous section with the connections created by libp2p.

# Try it yourself

## Support Multiplexing

- Install libp2p-mplex using `npm install libp2p-mplex`
- Require libp2p-mplex which needs to be added to the libp2p configuration object as follows

```js
const Mplex = require('libp2p-mplex')
```

- Add Mplex to the Libp2p configuration object as the streamMuxer as below

```js
const options = {
    modules: {
        ...
        streamMuxer: [ Mplex ],
        ...
    },
    ...
}
```

## Integrate Chat Protocol

- Require the chat protocol module we developed in the previous section as below

```js
const Chat = require('./5.0-finished-code')
```

- Add a dummy function which accepts libp2p object and dials any newly connected peer to create connections with the peer as below. We are going to complete the function in the next section

```js
async function dialPeers(libp2p) {}
```

- Invoke the dialPeers function from the main function to setup the listener which will dial and create connections with newly connected peers as below

```js
dialPeers(libp2p)
```

- Add a handler that handles any incoming message of a given chat protocol using the chat protocol's receive function as below

```js
await libp2p.handle(Chat.PROTOCOL, async ({ stream }) => {
  Chat.receive(stream)
})
```

In the next section, we will add code to send messages to the peers and complete the chat application which can be used between any 2 peers.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/5/5.1-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/5/5.1-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/4/4.2-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
