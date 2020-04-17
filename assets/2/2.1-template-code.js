'use strict'

const util = require('util');
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

async function main() {
    // Create a libp2p instance
    let libp2p = await util.promisify(createLibp2p)(options)

    libp2p.on('start', () => {
        console.info(`Libp2p Started`)
        // Use libp2p.peerinfo.multiaddrs to print the list of addresses
    })

    // Add 'connection:start' listener as above, refer to documentation
    // Inside the listener print the address of the connected peer

    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0')
    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0/ws')

    await libp2p.start();
}

main()