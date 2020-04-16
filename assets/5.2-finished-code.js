'use strict'

const util = require('util')
const { createLibp2p } = require('libp2p')

const TCP = require('libp2p-tcp')
const WS = require('libp2p-websockets')
const WStar = require('libp2p-webrtc-star')
const Wrtc = require('wrtc')

const multiaddr = require('multiaddr')

const Secio = require('libp2p-secio')

const Bootstrap = require('libp2p-bootstrap')
const MDNS = require('libp2p-mdns')
const KadDHT = require('libp2p-kad-dht')

const Chat = require('./5.0-finished-code')

const WebrtcStar = new WStar({ wrtc: Wrtc })

let options = {
    modules: {
        transport: [ TCP, WS, WebrtcStar ],
        connEncryption: [ Secio ],
        peerDiscovery: [ Bootstrap, MDNS ],
        dht: KadDHT
    },
    config: {
        peerDiscovery: {
            bootstrap: {
                list: [ '/ip4/127.0.0.1/tcp/63785/ipfs/QmWjz6xb8v9K4KnYEwP5Yk75k5mMBCehzWFLCvvQpYxF3d' ]
            }
        },
        dht: {
            enabled: true,
            randomwalk: {
                enabled: true
            }
        } 
    }
}

async function sendMessageToAll(message, libp2p) {
    message = message.substring(0, message.length - 1)
    let peers = libp2p.peerBook.getAllArray()
    peers.forEach(async (peerInfo) => {
        console.log(peerInfo.isConnected(), peerInfo.protocols.has(Chat.PROTOCOL))
        if(!peerInfo.isConnected() || !peerInfo.protocols.has(Chat.PROTOCOL)) return
        libp2p.dialProtocol(peerInfo, Chat.PROTOCOL, (err, stream) => {
            if (err) return console.error('Could not negotiate chat protocol stream with peer', err)
            Chat.send(message, stream)
        })
    })
}


async function main() {
    // Create a libp2p instance
    let libp2p = await util.promisify(createLibp2p)(options)

    libp2p.on('start', () => {
        console.info(`Libp2p Started`)
        libp2p.peerInfo.multiaddrs.forEach(ma => console.log(ma.toString()))
    });

    libp2p.on('connection:start', (peerInfo) => {
        console.info(`Connected to ${peerInfo.id.toB58String()}!`)
    })

    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0')
    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0/ws')

    // Handle Message Recieved
    libp2p.handle(Chat.PROTOCOL, Chat.handler)
    // Send Message on User Input
    process.stdin.on('data', message => sendMessageToAll(String(message), libp2p))

    await libp2p.start()
}

main()