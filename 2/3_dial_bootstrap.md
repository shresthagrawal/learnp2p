Connecting to a bootstrap node
==============================

Now its time for us to join the network! And as we said in the last section we must dail to our bootstrap nodes to join the network. 

`Libp2p` uses [`dial`](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#dial) function to connect to a node. It takes either a `PeerId` or a `Multiaddress` as a parameter and will attempt to create a connection to that peer, something like below.
```javascript
const conn = await libp2p.dial(nodeMultiaddr)
```
If the connection is created successfully, both nodes will then emit a `peer:connect` event.

We'll get more into what you do with the [`connection`](https://github.com/libp2p/js-libp2p-interfaces/tree/master/src/connection) object in a future section.

Try it yourself
===============
* In `index.js` perform the below steps
* declare the multiaddress of the bootstrap
* declare a function `async onStart(libp2p)` 
* inside the function call the `dial`  with the bootstrap's multiadress. Add a callback function to console log the error. 
* call the `onStart` after the node has started.
* Run the `bootstrap.js` 
* From another terminal run `index.js`
* You should see a connection message since both nodes have a listener configured to listen for the `peer:connection` event.

Hint
====
* Multiadress for the bootstrap `/ip4/0.0.0.0/tcp/63785/ipfs/QmWjz6xb8v9K4KnYEwP5Yk75k5mMBCehzWFLCvvQpYxF3d`
* callback function => `dial(address, (error) => {...})`

Congrats, now you're able to set up nodes and create connections between them.  In the next chapter, we'll learn how to securely communicate between nodes so others can't listen in on our conversations.


<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.3-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.3-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.1-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
