Let's do some future-proofing
=============================
  
We talked a lot about how awesome libp2p is as a modular and future-proof network stack.  So, let's see it in action.

Try it yourself
---------------
* Install the correct version of the multiaddr library: `^6.1.0` or above
* Add (`/ip4/0.0.0.0/tcp/0`) tcp and (`/ip4/0.0.0.0/tcp/0/ws`) websocket multi address to the nodes. 
> Note that using 0 as port automatically takes any available port 
* Console log all the multiaddress associated to the node
* Run the code, do you see a multiaddress with `tcp` and `ws` ?  If so, congratulations, you have just demonstrated future-proofing and modularity!

Hints
-----
* `libp2p.peerInfo.multiaddrs()` gives the list of all the multiaddress associated to the `libp2p` node
* `libp2p.peerInfo.multiaddrs.add(addressString)` can be used to add `multiaddress` 

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.0-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.0-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.3-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
