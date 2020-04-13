'use strict'

const util = require('util');
const { createLibp2p } = require('libp2p')

const TCP = require('libp2p-tcp')
const WS = require('libp2p-websockets')
const WStar = require('libp2p-webrtc-star')
const Wrtc = require('wrtc')

const WebrtcStar = new WStar({ wrtc: Wrtc })

let options = {
    modules: {
        transport: [ TCP, WS, WebrtcStar ]
    }
}

async function main() {
    // Create a libp2p instance
    let libp2p = await util.promisify(createLibp2p)(options)

    // Start libp2p
}

main()