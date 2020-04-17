'use strict'

const util = require('util')
const { createLibp2p } = require('libp2p')

const TCP = require('libp2p-tcp')
const WS = require('libp2p-websockets')
const WStar = require('libp2p-webrtc-star')
const Wrtc = require('wrtc')

const multiaddr = require('multiaddr')

const Secio = require('libp2p-secio')

// TODO: require `libp2p-bootstrap`

const WebrtcStar = new WStar({ wrtc: Wrtc })

let options = {
    modules: {
        transport: [ TCP, WS, WebrtcStar ],
        connEncryption: [ Secio ]
        // TODO: add peer discovery bootstrap module
    }
    // TODO: Add config for the peerDiscovery. Under the peerDiscovery 
}

// TODO: remove the line
const bootstrapAddress = multiaddr('/ip4/0.0.0.0/tcp/63785/ipfs/QmWjz6xb8v9K4KnYEwP5Yk75k5mMBCehzWFLCvvQpYxF3d');

// TODO: remove the function
async function onStart(libp2p) {
    libp2p.dial(bootstrapAddress, (err) => {
        if (err) return console.error(err)
    })
}

async function main() {
    // Create a libp2p instance
    let libp2p = await util.promisify(createLibp2p)(options)

    libp2p.on('start', () => {
        console.info(`Libp2p Started`)
        libp2p.peerInfo.multiaddrs.forEach(ma => console.log(ma.toString()))
        // TODO: remove the function call
        onStart(libp2p);
    });

    libp2p.on('connection:start', (peerInfo) => {
        console.info(`Connected to ${peerInfo.id.toB58String()}!`)
    })

    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0')
    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0/ws')

    await libp2p.start()
}

main()