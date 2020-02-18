## Very Cool Insight About Libp2p
* The above problem of having multiple standards for the same job is prevelant all across network protocols like `peer-discover`, `pubsub`, `encryption`, etc. And this is one of the main problems that libp2p aims to solve. 
* It doesnt aims to create a *n+1th* protocol but to support all the previous *n* protocls is a standard way.
* This is why `libp2p` is mosltly just a documentation/specification. Check it out here. Every implementation (go, rust, js, python) would follow the same specification. 
>TODO: Add link to the specification
* Thorough understanding the above specification gives a good breif about what libp2p is capable of doing and which are the apis to use for a paticular task. 
* The idea that it is completely language or any specific protocol agnostics makes it highly modular (and also some times confusing.)

## Understanding the Core libp2p-js module
* The libp2p-js core module itself is nothing its just a skeleton with all the interfaces. You can easily plug all the modules that obey the interface. Libp2p already provides the implementation of a lot of modules which does so (check it out here) which you can easily plug.
>TODO: Add proper links

>TODO: Explain the concept of skeleton and interfaces better. May be use an example.

* Creating a libp2p bundle, add config
* try it yourself 