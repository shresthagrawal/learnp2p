'use strict'

const Libp2p = require('libp2p')

const TCP = require('libp2p-tcp')
const WS = require('libp2p-websockets')
const WStar = require('libp2p-webrtc-star')
const Wrtc = require('wrtc')

const multiaddr = require('multiaddr')

<<<<<<< HEAD:assets/4/4.1-template-code.js
const Secio = require('libp2p-secio')

const Bootstrap = require('libp2p-bootstrap')
// TODO: require `libp2p-mdns`

const WebrtcStar = new WStar({ wrtc: Wrtc })

let options = {
    modules: {
        transport: [ TCP, WS, WebrtcStar ],
        connEncryption: [ Secio ],
        // TODO: modify peerDiscovery to all use MDNS
        peerDiscovery: [ Bootstrap ]
    },
    config: {
        peerDiscovery: {
            bootstrap: {
                list: [ '/ip4/127.0.0.1/tcp/63785/ipfs/QmWjz6xb8v9K4KnYEwP5Yk75k5mMBCehzWFLCvvQpYxF3d' ]
=======
const transportKey = WStar.prototype[Symbol.toStringTag]

let options = {
    modules: {
        transport: [ TCP, WS, WStar ]
    },
    config: {
        transport: {
            [transportKey]: {
                Wrtc
>>>>>>> 5d252e1dc6d99690359a5ee1049220e713db40f6:assets/2.3-finished-code.js
            }
        }
    }
}


async function main() {
    // Create a libp2p instance
    let libp2p = await Libp2p.create(options)

<<<<<<< HEAD:assets/4/4.1-template-code.js
    libp2p.on('start', () => {
        console.info(`Libp2p Started`)
        libp2p.peerInfo.multiaddrs.forEach(ma => console.log(ma.toString()))
    });

    libp2p.on('connection:start', (peerInfo) => {
=======
    libp2p.on('peer:connect', (peerInfo) => {
>>>>>>> 5d252e1dc6d99690359a5ee1049220e713db40f6:assets/2.3-finished-code.js
        console.info(`Connected to ${peerInfo.id.toB58String()}!`)
    })

    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0')
    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0/ws')

    await libp2p.start();
    console.info('Libp2p Started');
    libp2p.peerInfo.multiaddrs.forEach(ma => console.log(ma.toString()));
    onStart(libp2p);
}

main()