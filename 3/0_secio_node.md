* Our awesome libp2p has a interface for connection encrtyption (https://github.com/libp2p/js-libp2p-interfaces/tree/master/src/crypto)
* And they provide one implementation of that interface, Secio (https://github.com/libp2p/js-libp2p-secio)
* Explain secio in very short in an innovative way. (https://dominictarr.github.io/secret-handshake-paper/shs.pdf, https://github.com/auditdrivencrypto/secure-channel/blob/master/prior-art.md#ipfss-secure-channel)
* Try it yourself
    - Install secio `npm i libp2p-secio`
    - Include secio on the top
    - Modify the options (refer to the previos examplex link https://github.com/libp2p/js-libp2p/blob/8bed8f39ff3975850191cec93b7537d1428c8629/doc/CONFIGURATION.md#configuration-examples) and magically you encrypt the channels ;)
* Try to run it
    - Run the bootstap, run the node
    - Why does it break?
    - explain the error `Error: "/secio/1.0.0" not supported`
    - how to solve? the bootstrap doesnt support the secio yet and hence they are not able to create a connection. motivation for the next chapter, we include secio in the bootstrap node. 

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/3.0-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/3.0-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2.3-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->