'use strict'

const Libp2p = require('libp2p')

const TCP = require('libp2p-tcp')
const WS = require('libp2p-websockets')
const WStar = require('libp2p-webrtc-star')
const Wrtc = require('wrtc')

const multiaddr = require('multiaddr')

const transportKey = WStar.prototype[Symbol.toStringTag]

let options = {
    modules: {
        transport: [ TCP, WS, WStar ]
    },
    config: {
        transport: {
            [transportKey]: {
                Wrtc
            }
        }
    }
}

async function main() {
    // Create a libp2p instance
    let libp2p = await Libp2p.create(options)

    libp2p.on('peer:connect', (peerInfo) => {
        console.info(`Connected to ${peerInfo.id.toB58String()}!`)
    })

    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0')
    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0/ws')
    libp2p.peerInfo.multiaddrs.add(`/ip4/127.0.0.1/tcp/15555/ws/p2p-webrtc-star/p2p/${libp2p.peerInfo.id.toB58String()}`)

    await libp2p.start();
    console.info(`Libp2p Started`)
    
    const targetAddress = multiaddr('/ip4/127.0.0.1/tcp/63785/ipfs/QmWjz6xb8v9K4KnYEwP5Yk75k5mMBCehzWFLCvvQpYxF3d')
    libp2p.dial(targetAddress, (err, conn) => {
        console.log(err, conn);
    })
}

main()