'use strict'

const util = require('util');

const { createLibp2p } = require('libp2p')

const TCP = require('libp2p-tcp')
const WS = require('libp2p-websockets')
const WStar = require('libp2p-webrtc-star')
const Wrtc = require('wrtc')

const multiaddr = require('multiaddr')

const Mplex = require('pull-mplex')
const Secio = require('libp2p-secio')

const Bootstrap = require('libp2p-bootstrap')
const MDns = require('libp2p-mdns')
const KadDHT = require('libp2p-kad-dht')

const PubsubChat = require('./chat')

const WebrtcStar = new WStar({ wrtc: Wrtc })


let options = {
    modules: {
        transport: [ TCP, WS, WebrtcStar ],
        streamMuxer: [ Mplex ],
        connEncryption: [ Secio ],
        peerDiscovery: [ Bootstrap, WebrtcStar.discovery ],
        dht: KadDHT
    },
    config: {
        peerDiscovery: {
            bootstrap: {
                list: [ '/ip4/127.0.0.1/tcp/63785/ipfs/QmWjz6xb8v9K4KnYEwP5Yk75k5mMBCehzWFLCvvQpYxF3d' ]
            },
            dht: {
                enabled: true,
                randomwalk: {
                    enabled: true
                }
            } 
        },
        EXPERIMENTAL: {
            pubsub: true
        }
    }
}

async function sendMessageToAll(message, libp2p) {
    message = message.substring(0, message.length - 1);
    let peers = libp2p.peerBook.getAllArray()
    peers.forEach(async (peerInfo) => {
        if(!peerInfo.isConnected() || !peerInfo.protocols.has(ChatProtocol.PROTOCOL)) return
        libp2p.dialProtocol(peerInfo, ChatProtocol.PROTOCOL, (err, stream) => {
            if (err) return console.error('Could not negotiate chat protocol stream with peer', err)
            ChatProtocol.send(message, stream)
        })
    })
}

async function main() {
    // Create a libp2p instance
    let libp2p = await util.promisify(createLibp2p)(options)
    // Add ddress to listen
    libp2p.on('peer:connect', (peerInfo) => {
        console.info(`Connected to ${peerInfo.id.toB58String()}!`)
    })

    const pubsubChat = new PubsubChat(libp2p, PubsubChat.TOPIC) 

    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0')
    libp2p.peerInfo.multiaddrs.add('/ip4/0.0.0.0/tcp/0/ws')
    libp2p.peerInfo.multiaddrs.add(`/ip4/127.0.0.1/tcp/15555/ws/p2p-webrtc-star/p2p/${libp2p.peerInfo.id.toB58String()}`)
    
    // Handle Message Recieved
    // libp2p.handle(ChatProtocol.PROTOCOL, ChatProtocol.handler)
    // Send Message on User Input
    process.stdin.on('data', pubsubChat.send.bind(pubsubChat))
    
    await libp2p.start()
}

main()

