Bootstrap - what is it good for?
================================

If you've never heard the term 'bootstrap' before, don't worry.  While it can mean a variety of [different things](https://techterms.com/definition/bootstrap#:~:text=Terms%20%3A%20Bootstrap%20Definition-,Bootstrap,automatically%20loads%20and%20executes%20commands.), for purposes of networking and libp2p, think of a bootstrap node as an anchor point that guarantees your individual libp2p node will be able to connect to the broader network.  The basic idea of a bootstrap node is just a libp2p node with a publicly known address that any other node can use as its first point of contact to connect to the network.  In theory, new nodes can always count on the bootstrap node to be up and running when they want to connect to the network so you can hardcode a bootstrap node's multiaddress in your new node's starting configuration and be confident you will always have a connection point to the broader network.  

By default, libp2p nodes generate new `PeerIds` and addresses every time they start unless you provide those details in the `options` object.  You can define them as below:
```javascript
const node = libp2p.create({
    addresses: {
        listen: ['/ip4/127.0.0.1/tcp/63685', '/ip4/127.0.0.1/tcp/63786/ws']
    },
    peerId: {
        "id": "Qma3GsJmB47xYuyahPZPSadh1avvxfyYQwk8R3UnFrQ6aP",
        "privKey": "CAASpwkwgg...",
        "pubKey": "CAASpgIwggEiMA0G..."
    }   
})
```

This configuration sets up a node with two fixed multiaddresses, one for tcp transport listening on port 63685 and one for websocket transport listening on port 63786.

Try it yourself
===============
 
* Create a copy of `index.js` to `bootstrap.js` and perform the below step on the `bootstrap.js` code.
* Add a fixed address to the node `options` object
* Change the ports from '0'(which defaults to a best available/open port) to a specific port.
* Run it Locally, what do you see?
  - Do you see ports and address specified? 

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.2-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.2-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.1-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
