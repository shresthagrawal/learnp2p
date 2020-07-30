Connecting to a bootstrap node
==============================

Now that we understand the concept of a bootnode, let's think about how to connect to one from another node.  To do that, we have to learn about how to create connections between libp2p nodes.  In libp2p, there are two ways to create connections.  You either use the `dial` function to create a generic connection with another node or the `dialProtocol` function to create a connection using a specific protocol (e.g. `/chat/1.0.0`).  For now, we're just going to worry about connecting to other peers so let's use the bootstrap node we created in the last section as a remote peer and dial a connection.  

The [`dial`](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#dial) function takes either a `PeerId` or a multiaddress as a parameter and will attempt to create a connection to that peer, something like below.
```javascript
const conn = await libp2p.dial(bootstrapNodeMultiaddr)
```

If the connection is created successfully, both nodes will then emit a `peer:connect` event.

We'll get more into what you do with the [`connection`](https://github.com/libp2p/js-libp2p-interfaces/tree/master/src/connection) object in a future section.

Try it yourself
===============
* Start up the bootstrap node created in the last section
* Copy the node file and then change the port numbers in the `options` object to create a new node
* Add code to dial the bootstrap node from the second node and see what happens
* Run the nodes
 - Open one terminal and run the bootstrap 
 - Open a second terminal and run your second node. You should see a connection message since both nodes have a listener configured to listen for the `peer:connection` event.

Congrats, now you're able to set up nodes and create connections between them.  In the next chapter, we'll learn how to securely communicate between nodes so others can't listen in on our conversations. 
<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.3-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.3-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.1-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->

