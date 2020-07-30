Peer Identity
=============

One of the key concepts of libp2p is how the identity of a peer is established.  We talked about multiaddresses in the previous section which tell libp2p how to connect to a specific node and the critical data element that uniquely identifies a node is it's [`PeerId`](https://docs.libp2p.io/concepts/peer-id/).  Each libp2p has a secret, private key along with a corresponding public key that can be shared with other peers on the network.  This key pair is what enables libp2p nodes to communicate securely. The PeerId is a cryptographic hash of the node's public key.  There are several key types that can be used and the details are found in the [PeerId spec](https://github.com/libp2p/specs/blob/master/peer-ids/peer-ids.md).

As explained in chapter 1, when setting up a libp2p node, you provide an `options` object to the `libp2p.create` function that tells libp2p what modules you are planning to use and can also provide additional configuration details as well.  Importantly, you can tell libp2p what your node's PeerId is as well as specify what addresses you want your node to listen on with code like below:
```javascript
const node = libp2p.create({
    addresses: {
        listen: ['/ip4/127.0.0.1/tcp/0']
    },
    peerId: {
        "id": "Qma3GsJmB47xYuyahPZPSadh1avvxfyYQwk8R3UnFrQ6aP",
        "privKey": "CAASpwkwgg...",
        "pubKey": "CAASpgIwggEiMA0G..."
    }   
})
```

Once you set up your node, use [`libp2p.multiaddrs`](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#multiaddrs) to retrieve all the multiaddresses that your node is advertising on the network.

When your node connects to other peers on the network or the status of those connections change, you can set up listeners to react to the [events](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#events) emitted by your local node.  Common events are [`peer:discovery`](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#a-peer-has-been-discovered), [`peer:connect`](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#a-new-connection-to-a-peer-has-been-opened), and [`peer:disconnect`](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#an-existing-connection-to-a-peer-has-been-closed).  Use the the libp2p event handler like below to react to these events:
```javascript
libp2p.on('peer:discovery', (peer) => console.log(JSON.stringify(peer.toJSON(), null, 2)))
```
You can also use the [`libp2p.connections`](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#connections) to get a list of current connections between your libp2p node and peers.
* Try it yourself
    - Modify the `on(start...` listener to print all multiaddrs associated with your node when the node starts up
    - Add a new listener for the `peer:connect` and print out the PeerId for the `remotePeer` in the body of the listener
    - Run it and you should see a list of your node's multiaddrs

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.1-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.1-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.0-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->

