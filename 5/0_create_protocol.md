* Explain Pull stream, concept of source, sink.. 
* Stream iterables
* Try it yourself
    - Add hanler.. 
* Explain async iterator & streams
* Define the protocol
* Do it yourself
    - Install pull-mplex
    - modify the config accordingly

In this section, let us start with writing a chat protocol which consumes  the data which  is  typed on your screen and sends  it to the connected peers and which also reads the data sent by connected peers and prints it on the screen.

When connected to a peer, the connection creates a duplex stream with the peer from which you can read data sent by  peer or write data to the peer. Let us unpack the previous statement starting with understanding what streams are. Streams are a fundamental concept in Nodejs which help deal with information exchange like files, network communications etc. Streams are interesting is because they let us deal with large amount of data without actually loading all the data in memory, as the streams process smaller chunks of data. There are multiple types of streams like Readable, Writable, Duplex and Transform. Readable streams let us read data. Writeable streams let us write data. Duplex stream allow us to wrote as well as read data. Transform streams are modify the data before as it is being read or  written. Libp2p provides us  with a duplex stream when a connection is established which allows us to exchange data with the peer. Duplex stream has a source where the data received from the connection is available and a sink the object to which data has to be written to send the data to the other side of the connection(i.e peers).

We have seen that streams are great as we can deal with smaller chunks of data. It is highly recommended to use async iterators when working with streams as iterating through the stream to get the next chunks asynchronously becomes easier. You can read more about iterators in Nodejs [here](https://javascript.info/async-iterators-generators).

Given that we now understand what is a stream, why does Libp2p give us a duplex stream and why do we use async iterators. It is time for to dive into the code and write a chat protocol that uses streams to display data received from a stream and sends data typed on screen to the peer.

# Try it yourself

* Install `it-pipe` module using `npm install it-pipe`
* Require it-pipe module so that you can pipe the iterable streams from source to sink. Source is the source of the data and sink is the destination of the data. You can require the  module using the following
```js
const pipe = require('it-pipe')
```
* Define a name to the chat protocol used between the peers. We are using `/libp2p/chat/1.0.0` as an example name and it can be defined as below
```js
const PROTOCOL = '/libp2p/chat/1.0.0'
```
* In the send function, we want to send data that is typed on the screen (stdin) to the peer. We need to pipe data from the source which is the `stdin` and send it to the sink of the stream so that it can be propagated to the peer as below
```js
pipe(
    process.stdin,
    stream.sink
  )
```
* In the receive function, we want to receive data received from stream to the console. We need to pipe the source of the stream and log the data on console. We need to iterate through the received data using the iterator as below
```js
pipe(
    stream.source,
    async function (source) {
      for await (const msg of source) {
        console.log('> ' + msg.toString('utf8').replace('\n', ''))
      }
    }
  )
```

Now we have written a chat protocol where once we receive the stream for the connection to a peer, we can send messages written on the console to the peer and also log messsages sent by the peer onto the console. Let's jump ahead in the next section to integrating this chat protocol with libp2p connections.

<!-- tabs:start -->

#### ** Template **

[embedded-code](../assets/5/5.0-template-code.js ':include :type=code embed-template')

#### ** Solution **

[embedded-code-final](../assets/5/5.0-finished-code.js ':include :type=code embed-final')

#### ** Previous Chapter Solution **

[embedded-code-previous](../assets/1/1.0-finished-code.js ':include :type=code embed-previous')

<!-- tabs:end -->