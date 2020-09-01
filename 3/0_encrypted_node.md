## Securing our communication
Now that we understand how libp2p secures communication between nodes, let's get down to business.  

Try it yourself
===============
- Install secio `npm i libp2p-noise`
- Add `noise` module
```javascript
const { NOISE } = require('libp2p-noise')
```
- Update the `options` in your node configuration as below
```javascript
new Libp2p({
   modules: {
    ...
    connEncryption: [NOISE]
   }
}
```
- Try running the bootstrap node created in 2.2 and then connect this node to it
- What error do you see?  

The error you're seeing here - `Error: Protocol Selection Failed` - is that your bootstrap node isn't configured to support `noise` .  As said before, nodes have to have same encryption modules to be able to communicate.  

In the next section, we'll resolve this issue!

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/3/3.0-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/3/3.0-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.3-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
