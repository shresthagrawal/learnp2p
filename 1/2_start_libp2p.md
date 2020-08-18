## Starting the Libp2p node	
Hello and welcome back! If you've followed the previous segements you would already have - 
- Created a Libp2p node.
- Added a few transport modules in the empty map that we created.

### Starting our Libp2p node
Let's first start by revising the main static function of Libp2p that is `libp2p.create(options)`. We created an instance of Libp2p through this function and passed the modules as options in this method.

To actually start the node, there are only two mandatory parameters to creating a Libp2p node:
- Atleast one transport module to be used.
- A connection Encryption protocol. (`Crypto`) 

> However it is recommed to also have a stream-multiplexer configured. 

Now since, we have those alread configured we'll start our node. We can do that by 	`libp2p.start()` method which starts our libp2p node.

### Events
Once you have a libp2p instance, you can listen to several events it emits, so that you can be notified within its lifetime. An example can be -
```bash
libp2p.on('error', (err) => {})
```
This is an instance for listening to an error in Libp2p. Another example could be if it finds a new peer to connect to -
```bash
libp2p.on('peer:discovery', (peer) => {})
```
 > Note - You can learn more about these listeners in the official documentation [here](https://github.com/libp2p/js-libp2p/blob/master/doc/API.md#events)

### Your Turn

   - Add listeners for `on start`, and add `log`. 
    - Start the libp2p node using `libp2p.start()`.
> Tip - For those running locally, you should be able to see the log started by libp2p.

This successfully concludes Chapter 1 of our quest to create a js-libp2p-chat tutorial. See you in the next chapter!


<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/1/1.3-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/1/1.3-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.2-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->