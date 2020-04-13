'use strict'

const Libp2p = require('libp2p')

const TCP = require('libp2p-tcp')
// TODO: require `libp2p-websockets` and `libp2p-webrtc-star`
// TODO: require `wrtc`

// TODO: Get the toString tag for `libp2p-webrtc-star` class using `.prototype[Symbol.toStringTag]` method

let options = {
    modules: {
        transport: [ TCP, /* TODO: add `libp2p-websockets`, and `libp2p-webrtc-star` instance */ ],
    },
    config: {
        transport: {
						// TODO: add map with key as key for `libp2p-webrtc-star` and value as the arguments to be sent to the module while initializing
						// NOTE: The elements specified here are passed as arguments for the modules specified. As here we are using wrtc implementation for webRTC
				}
    }
}

async function main() {
    // Create a libp2p instance
    let libp2p = await Libp2p.create(options)
		console.log(libp2p.peerInfo.id.toJSON())
}

main()