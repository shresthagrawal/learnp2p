* Peer info, what is it, what does it store?  Documentation for the API: (https://github.com/libp2p/js-peer-info/tree/v0.15.1)
* Try it yourself, 
    - Modify on start listener such stat it prints all the mutiaddrs
    - Add a new listener for connection:peer (https://github.com/libp2p/js-libp2p/tree/v0.25.4#libp2ponconnectionstart-peer--) documentation for checking the call back
    - In the callback of the litener, use the peerinfo and print the peer id in string 
* Run it locally, what do you see?
    - List of your connection multiaddrs

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.1-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.1-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.0-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->

