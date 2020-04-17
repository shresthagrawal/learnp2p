'use strict'

const util = require('util')
const { createLibp2p } = require('libp2p')

const TCP = require('libp2p-tcp')
const WS = require('libp2p-websockets')
const WStar = require('libp2p-webrtc-star')
const Wrtc = require('wrtc')

const multiaddr = require('multiaddr')

const WebrtcStar = new WStar({ wrtc: Wrtc })

let options = {
    modules: {
        transport: [ TCP, WS, WebrtcStar ]
    }
}

// Declare a multiaddr named bootStrapAddress to use it for dialing

// Declare an async onStart(libp2p) function that is called on start.
// Inside the function dial the bootstrap address, and for the callback handle on error. 


async function main() {
    // Create a libp2p instance
    let libp2p = await util.promisify(createLibp2p)(options)

    libp2p.on('start', () => {
        console.info(`Libp2p Started`)
        libp2p.peerInfo.multiaddrs.forEach(ma => console.log(ma.toString()))
        // Call onStart function and pass libp2p
    });

    libp2p.on('connection:start', (peerInfo) => {
        console.info(`Connected to ${peerInfo.id.toB58String()}!`)
    })

    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0')
    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0/ws')

    await libp2p.start()
}

main()