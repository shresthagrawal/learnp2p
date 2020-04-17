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

    }

    leave () {

    }

    send (message) {
        
    }
}

module.exports = Chat
module.exports.TOPIC = '/libp2p/example/chat/1.0.0'
