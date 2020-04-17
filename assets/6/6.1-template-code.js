class Chat {
    constructor(libp2p, topic) {
        this.libp2p = libp2p
        this.topic = topic
        this.libp2p.on('start', this.onStart.bind(this))
        this.libp2p.on('stop', this.onStop.bind(this))

        // Join if libp2p is already on
        if (this.libp2p.isStarted()) this.join()
    }
    
    onStart () {
        this.join()
    }

    onStop () {
        this.leave()
    }

    join () {
        // TODO: use the libp2p.pubsub to subscribe to the topic
        // TODO: add handler for message recieved
    }

    leave () {
        // TODO: use the libp2p.pubsub to unsubscribe to the topic
    }

    send (message) {
        // TODO: use the libp2p.oubsub to publish message to the topic
    }
}

module.exports = Chat
module.exports.TOPIC = '/libp2p/example/chat/1.0.0'
