## Securing our communication

Now that we understand how libp2p secures communication between nodes, let's get down to business.  Our node currently sends data in plain text over the wire so anyone can listen in.  As mentioned previously, libp2p offers two encryption modules out of the box, `secio` and `noise`.  It's beyond the scope of this tutorial to go into all the [nuances of each and which to pick](https://forum.web3.foundation/t/transport-layer-authentication-libp2ps-secio/69), but we're going to use `noise`, since `secio` is in the process of being deprecated as of the time of this writing. 

Make sure to add the Javascript implementation of `noise` to your code before 

Try it yourself
===============
- Install secio `npm i libp2p-noise`
- `Require` noise
- Update the `options` in your node configuration as below
```javascript
new Libp2p({
   modules: {
     connEncryption: [NOISE]
   }
}
```
- Try running the bootstrap node created in 2.2 and then connect this node to it
- What error do you see?  

The error you're seeing here - `Error: "/noise/1.0.0" not supported` - is that your bootstrap node isn't configured to support `noise` so the node dialing into your bootstrap can't connect.  In libp2p, nodes have to match on protocol and supported transport/encryption modules to be able to communicate.  

In the next section, we'll resolve this issue and finally have the secured communication we've been hoping for.
<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/3/3.0-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/3/3.0-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.3-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->