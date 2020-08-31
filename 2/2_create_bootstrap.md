Bootstrap
=========
When you join a decentralised network who do you connect to first? There isn't any centralised server to start communication? 

The answer is `bootstrap` nodes. These are a set of nodes which anyone can dail into to get into the decentralised network. Ideally a bootstrap node has a specific address (`peerId` + `transport running on a specific port`) such that it is always accessible to a new node joining the network.  
Lets build one for our `awesome-chat-system`    

<!-- explain bootstrap needs specific ports -->


Try it yourself
===============
 
* Create a copy of `index.js` to `bootstrap.js` and perform the below step on the `bootstrap.js` code.
* Modify `options` add a fixed address to the `bootstrap` node
* Change the tcp port from `0` to `63685`, and ws port from `0` to `63786`
* Run it Locally, what do you see?
* Do you see ports and address specified? 

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/2/2.2-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/2/2.2-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/2/2.1-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->
