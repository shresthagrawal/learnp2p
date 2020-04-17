const CLEARLINE = '\033[1A'

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
        this.libp2p.pubsub.subscribe(this.topic, null, (message) => {
            const fromMe = this.libp2p.peerInfo.id.toB58String() == message.from;
            const user = message.from.slice(-5, -1);
            console.info(`${fromMe ? CLEARLINE : ''}${user}: ${message.data}`)
        }, (err) => {
            console.info(`Subscribed to ${this.topic}`, err)
        })
    }

    leave () {
        this.libp2p.pubsub.unsubscribe(this.topic)
    }

    send (message) {
        message = message.slice(0, -1)
        this.libp2p.pubsub.publish(this.topic, message, (err) => {
            if (err) throw err
        })
    }
}

module.exports = Chat
module.exports.TOPIC = '/libp2p/example/chat/1.0.0'

