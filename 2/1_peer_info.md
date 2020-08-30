Peer Identity
=============
Each libp2p has a public/private key pair (if you dont know about asymetric cryptography you can for now think of like passwords). In the last section we said there could be multiple nodes running on the same ip / port and hence we need a [`PeerId`](https://docs.libp2p.io/concepts/peer-id/). The PeerId is actually the cryptographic hash of the node's public key. 

check out the [PeerId spec](https://github.com/libp2p/specs/blob/master/peer-ids/peer-ids.md) for details.


Libp2p by default assigns a [`PeerId`](https://docs.libp2p.io/concepts/peer-id/) but you can also specify your own [`PeerId`](https://docs.libp2p.io/concepts/peer-id/) by adding it to the options
```javascript
let options = {
    ...
    peerId: {
        "id": "Qma3GsJmB47xYuyahPZPSadh1avvxfyYQwk8R3UnFrQ6aP",
        "privKey": "CAASpwkwgg...",
        "pubKey": "CAASpgIwggEiMA0G..."
    }   
})
```

### Events
Once you have a libp2p instance running, you can listen to several events to trigger certain actions. 
An example can be -
```bash
libp2p.on('error', (err) => {})
```
This is an instance for listening to an error in Libp2p. Another example could be if it finds a new peer to connect to -
```bash
libp2p.on('peer:discovery', (peer) => {})
```
 > Note - You can learn more about these listeners in the official documentation [here](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#events)

Try it yourself
--------------- 
- Add a new listener for the `peer:connect` and print out the PeerId for the `remotePeer` in the body of the listener
- Run it and you should see a list of your node's multiaddrs

Hint
----
- `peerInfo.id.toB58String()` returns the `peerId` as a string


<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.1-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.1-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.0-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->

