// TODO: declare const for clear line

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
            // TODO: check if the message was sent by me
            // TODO: take the last 5 char of the id as the user name
            // TODO: modify the log appropriately
            console.log(String(message.data))
        }, (err) => {
            console.log(`Subscribed to ${this.topic}`, err)
        })
    }

    leave () {
        this.libp2p.pubsub.unsubscribe(this.topic)
    }

    send (message) {
        // TODO: remove the new line char (last char) from the message
        this.libp2p.pubsub.publish(this.topic, message, (err) => {
            if (err) throw err
        })
    }
}

module.exports = Chat
module.exports.TOPIC = '/libp2p/example/chat/1.0.0'
