
![transport](./assets/transport.gif)

What is transport?
==================
TODO: Add a cool gif about transports
lets break it!

## What does transport means in p2p system?
As the word transport says itself, it does transportation; but of data between two peers. To understand why we need `libp2p` to handle transports, we first need to understand why are they used for. 

_The Internet currently supports various sets of communication protocols to communicate between systems_. The most commonly used set is called the [TCP/IP Model](https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/) which uses **TCP ([Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol))** at the Transport Layer and the **IP ([Internet Protocol](https://en.wikipedia.org/wiki/Internet_Protocol))** at the Application layer.

> **Cool Fact**: Another very famous protocol in the [Internet Protocol Suite](https://en.wikipedia.org/wiki/Internet_protocol_suite) is the [OSI Model](http://ru6.cti.gr/bouras-old/WP_Simoneau_OSIModel.pdf). _In comparison to the **TCP/IP Model** which has 4 layers, the OSI Model has **7 layers!**_

The major function of **`TCP` (transport layer)** is to **deliver data** securely between the sender and the receiver (could be server and client or peer to peer). 

It does that by _dividing the data_ that needs to be delivered into **smaller packets or segments**; then it numbers the packets and then adds some additional information into each packet containing details about port numbers of the source & destination. 
_It's a dense & highly reliable protocol standard._

Another very famous transport protocol is the **`UDP`** or the [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol). **UDP** also has a similar function but is **_much more simpler than TCP_**. 

For example, one major difference between `UDP` & `TCP` is that UDP ***isn't that secure and reliable*** as compared to TCP and it lacks the function of [error recovery](https://en.wikipedia.org/wiki/Error_detection_and_correction) & [re-transmission](https://en.wikipedia.org/wiki/Retransmission_%28data_networks%29) which ensures that all the `data segments` will *safely and securely be delivered and **also redelivered** if any data segment was **by any exception left out**.*

Thus, `UDP` is used in used in functionalities such as [broadcasting](https://en.wikipedia.org/wiki/Broadcasting_%28networking%29) **real-time media** or **online gaming platforms** where *occasional data/packet loss could be accepted*. And because UDP is **much simpler** than the `TCP`, it provides **a higher [throughput](https://en.wikipedia.org/wiki/Throughput) and shorter latency** which is highly essential for an enriching experience.
 
The **`TCP & UDP`** comprise majorly all traffic on the Internet and are most commonly the default protocols used in every applications. 

Though various other protocols could also be used for specific purposes. These include [`web-sockets`](https://en.wikipedia.org/wiki/WebSocket), [`MQTT`](http://mqtt.org/), or high-level protocols such as [`QUIC`](https://en.wikipedia.org/wiki/QUIC) (developed by Google) etc. 

* *In a p2p system, depending on the type of application and use, it might not be completely clear about which of these standards does the other party supports.* 
* *Also as the developer, it becomes very hard to implement and test each protocol from scratch to see what suits best.* 

## This is where libp2p transports come to rescue!
> TODO: Add a cool GIF about rescuing

Although one thing becomes very clear that even though every type of transport *is different from each other* on the basis of its *core implementation and structure*, they have certain operations in common eg. ***dialing other user, multiplexing and receiving packets, etc***.

Using this commonality, `libp2p` provides a simple interface that could be used to adapt the current and future protocols making Libp2p applications **more diverse for networking environments.*** 

> Note: Libp2p **doesn't provide a new (n+1th) protocol** upon the already existing 'n' number of protocols; its just a toolkit which could be used to intellectually select and use the protocols that would work best for us! 

*Another magical feature about Libp2p* is that it also provides the functionality of **Multiple Transports**! Meaning that it can allow to use multiple protocols all at once through a component called **[`the switch`](https://docs.libp2p.io/reference/glossary/#switch)**. 

>TODO: Link to the documentation of libp2p. 

>TODO: Link to the list of transport implementation.

## Summary
With `libp2p`, you can easily plug in and test any of the existing transport protocols (`TCP/UDP/QUIC` etc.) without bearing any pain. 

*You can also come up with a new transport standard which might be built upon one or multiple transports or maybe a whole new protocol from scratch!*

## Use of transport in our awesome-p2p-chat-system
>TODO: explain that in the end you would have a way to communicate with other peers for out chat system

## Additional Reference
>TODO: SimpleAsWater/transports