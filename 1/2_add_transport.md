## Adding Transports

### Let's add some transport protocols! 
Welcome back to the next segment of this chapter. In the previous segment of this worship, we 
1. imported `libp2p`,
2. created an empty map named `options`, and 
3. created a libp2p node inside our `main` function. 

In this segment, we'll actually go ahead and add some cool transport protocols in our `awesome-p2p-chat` application. Now as we discussed earlier in the introduction to transports segment, libp2p provides an amazing functionality allowing you to use multiple transports in the same application and that is what we will be doing today!

So without any further ado, lets go ahead and start discussing and implementing the protocols that we'll be using.

### Various Transport Protocols, we'll be using

* `libp2p-tcp` : This is the libp2p implementation of the standard TCP (Transfer Control Protocol). 

	*The basic function of  **TCP** is to segment the information into smaller data packets, index them, and add additional information such as source & destination.* 

	More information about TCP is given in the the [first section of this workshop](http://salabs.me/jslibp2p-chat-tutorial/#/1/introduction). It could be simply installed using the command:
	```bash
	npm i libp2p-tcp@0.13.0
	```
>Note: For this workshop, we'll be using specific versions of the transport libraries; so make sure you only install the above mentioned protocol. 

* `libp2p-websockets` : This is the libp2p implementation of a transport protocol called **Websockets**. Websockets is an independent protocol built over TCP. 

	One major advantage of **Websockets** is that it *enables a rich and efficient duplex (two-way) connection enabling peers to flow information both the ways simultaneously with a high speed*. For learning more about the basic websockets structure, checkout this blog [here](https://www.tutorialspoint.com/websockets/websockets_quick_guide.htm).

	
	It could be simply installed using the command:
	```bash
	npm i libp2p-websockets@0.12.2
	```
* `libp2p-webrtc-star` : Libp2p-webrtc-star is one of the open-source WebRTC transport protocol available to Libp2p.  

	For starters, [WebRTC](https://webrtc.org/) enables browsers and mobile applications to establish Real-Time Communications (RTC) capabilities via simple APIs. `libp2p-webrtc-star` includes the WebRTC transport protocol along with a discovery service. For learning more about it's functionalities and implementations, checkout the [its official repository](https://github.com/libp2p/js-libp2p-webrtc-star).

* `wrtc` : **wrtc** *isn't a libp2p transport library* but rather a **node.js** implementation of **WebRTC** (discussed above). It's shipped along with a few additional helpful, non-standard extensions. Checkout [the official repository of node-wrtc](https://github.com/node-webrtc/node-webrtc).

	It could be simply installed using the command:
	```bash
	npm i wrtc@0.4.1
	```
* `libp2p-mdns` : Libp2p-mdns is the libp2p implementation of Multi-cast DNS. For starters, **Multi-cast DNS** *is a way of using familiar DNS programming interfaces, packet formats and operating semantics, in a small network where no conventional DNS server has been installed.* For learning more libp2p-mdns, checkout [its official repository](https://github.com/node-webrtc/node-webrtc).

### Your Turn
1. **Install** the specific versions of these transport protocols using the commands mentioned above.
2. Include all the transports protocols (`libp2p-tcp`, `libp2p-websockets`, `libp2p-webrtc-star`, `wrtc`)
3. To use `libp2p-webrtc-star`, instead of just creating an instance without arguments, you need to pass an options object with the WebRTC implementation.
4. In the options.module section, add the declared transports (`TCP`, `WS`, `WebrtcStar`).

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.2-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.2-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.1-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->

