Let's do some future-proofing
=============================
  
We talked a lot about how awesome libp2p is as a modular and future-proof network stack.  So, let's see it in action.

Try it yourself
---------------
* Install the correct version of the multiaddr library: "^6.1.0" or above
* Add the TCP transport module to your local node's configuration and start up the node
* Look at the multiaddress that is printed out and verify it's TCP
* Now, let's pretend its [2011](https://en.wikipedia.org/wiki/WebSocket) and the amazing new websocket protocol has just been introduced.  And, awesomely enough, libp2p happens to have had a websocket module ready at the same time!  Add `ws` to the `transport` section of your node's configuration options and start it up.
* Do you see a new multiaddress with `ws` in it?  If so, congratulations, you have just demonstrated future-proofing and modularity in 1 line of code!

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.0-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.0-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.3-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
