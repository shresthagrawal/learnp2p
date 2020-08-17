##  Adding Transports
Welcome back to the next segment of this chapter. In the previous segment of this worshop, we

- Include the `libp2p-core`, and `utils`.
- Declare an empty `options` map for now. 
- Create an `async main`, and inside main, call the `Libp2p.create` method and pass the empty options map.
-  Call `main`.  

In this segment, we'll actually go ahead and add some transport protocols in our `awesome-p2p-chat` application. Now, as we discussed earlier in the introduction to transports segment, libp2p provides an amazing functionality allowing you to use multiple transports in the same application and that is what we will be doing today!

Before proceeding let's first understand the various different transport protocols that we'll be using today.

###  Various Transport Protocols, we'll be using

* `libp2p-tcp` : This is the libp2p implementation of the standard TCP (Transfer Control Protocol).*The basic function of **TCP** is to segment the information into smaller data packets, index them, and add additional information such as source & destination.*

	More information about TCP is given in the the [first section of this workshop](http://salabs.me/jslibp2p-chat-tutorial/#/1/introduction). The latest version could be simply installed using the command:

	```bash
	npm install libp2p-tcp@0.14.4
	```

>Note: For this workshop, we'll be using specific versions of the transport libraries; so make sure you only install the above mentioned protocol.

* `libp2p-websockets` : This is the libp2p implementation of a transport protocol called **Websockets**. Websockets is an independent protocol built over TCP.

	One major advantage of **Websockets** is that it *enables a two-way connection enabling peers to flow information both the ways simultaneously with a high speed* Guess what - It's used in all of your favorite online Multi-player games such as Assassin's Creen Unity etc. 
	
	For learning more about the basic websockets structure, checkout this blog [here](https://www.tutorialspoint.com/websockets/websockets_quick_guide.htm). 
	It could be simply installed using the command:

	```bash
	npm install libp2p-websockets@0.13.6
	```

* `libp2p-webrtc-star` : Libp2p-webrtc-star is one of the open-source WebRTC transport protocol implementation available to Libp2p. For starters, [WebRTC](https://webrtc.org/) is used in a variety of cases from basic web-apps that uses the camera or microphone, to more advanced video-calling applications and screen sharing. Also its maintained by Google, Microsoft and Mozilla amongst many others. For learning more about it's functionalities and implementations, checkout the [its official repository](https://github.com/libp2p/js-libp2p-webrtc-star). It could be simply installed using the command:

	```bash
	npm install libp2p-webrtc-star@0.17.9
	```

* `wrtc` : **wrtc** *isn't a libp2p transport library* but rather a **node.js** implementation of **WebRTC** (discussed above). It's shipped along with a few additional helpful, non-standard extensions. Checkout [the official repository of node-wrtc](https://github.com/node-webrtc/node-webrtc). It could be simply installed using the command:

	```bash
	npm i wrtc@0.4.1
	```

* `libp2p-mdns` : Libp2p-mdns is the libp2p implementation of Multi-cast DNS. *mDNS is a related version of DNS, designed for use on small networks, especially in situations where there is no managed DNS server. 
In mDNS, each device attached to the network (e.g. computers, printers, etc.) acts as a miniature DNS server. Each device multicasts packets to the network announcing information such as:  My hostname is "Pat's Computer", my IP address is 169.254.8.7, I offer a shared printing service called "Pat's Printer", a shared file server, and I'm sharing the following seventeen music playlists...".* 

	For learning more libp2p-mdns, checkout [its official repository](https://github.com/node-webrtc/node-webrtc). Install it using the following command:

	```bash
	npm i libp2p-mdns@0.13.3
	```
	
###  Your Turn

1. **Install** the specific versions of these transport protocols using the commands mentioned above.

2. Include all the transports protocols (`libp2p-tcp`, `libp2p-websockets`, `libp2p-webrtc-star`, `wrtc`)

3. To use `libp2p-webrtc-star`, instead of just creating an instance without arguments, you need to pass an options object with the WebRTC implementation.

4. In the options.module section, add the declared transports (`TCP`, `WS`, `WebrtcStar`).

See you in the next segment. Cheers!
<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.2-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.2-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.1-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->

