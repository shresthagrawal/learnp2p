## Adding Transports

In this segment, we'll actually go ahead and add some transport protocols in our `awesome-p2p-chat` application. Before proceeding let's first understand the various different transport protocols that we'll be using today.

> Note: Libp2p is highly developing library and lot of implementation might get deprecated. Make sure to install the specified versions of the modules to match with the workshop

### Various Transport Protocols, we'll be using

- `tcp` : The basic function of **TCP** is to segment the information into smaller data packets, index them, and add additional information such as source & destination.

- `websockets` : it is an independent protocol built over TCP. One major advantage of **Websockets** is that it _enables a two-way connection enabling peers to flow information both the ways simultaneously with a high speed_ Guess what - It's used in all of your favorite online Multi-player games such as Assassin's Creen Unity etc. For learning more about the basic websockets structure, checkout this blog [here](https://www.tutorialspoint.com/websockets/websockets_quick_guide.htm).

- [`webrtc`](https://webrtc.org/) : it is mostly used in webapp using camera or microphone, for tasks like video-calling, screen sharing. Also its maintained by Google, Microsoft and Mozilla amongst many others. For learning more about it's functionalities and implementations, checkout the [its official repository](https://github.com/libp2p/js-libp2p-webrtc-star).

- `mdns` : Have you ever bought your iphone near to your freinds iphone and it created a popup to share wifi password! Or connected to wirelless printer automatically. Its probably using mdns. The basic idea is every device multicasts the dns records to all the devices in the network about the services it can offer. For learning more libp2p-mdns, checkout [its official repository](https://github.com/node-webrtc/node-webrtc).

### Your Turn

1. **Install** the specific versions of these transport protocols.
   ```bash
   npm i libp2p-tcp@0.14.4 libp2p-websockets@0.13.6;
   npm i libp2p-webrtc-star@0.17.9 wrtc@0.4.1 libp2p-mdns@0.13.3;
   ```
2. We have added the implementation for `tcp` and `webrtc` as examples in the template code on the right. Add `websocket` similar to `tcp`

// Todo: Explain why `webrtc` is different

See you in the next segment. Cheers!

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.2-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.2-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.1-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
