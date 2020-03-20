'use strict'

const util = require('util');
const { createLibp2p } = require('libp2p')
// TODO: require `libp2p-tcp`, `libp2p-websockets`, and `libp2p-webrtc-star`
// TODO: require `wrtc`

// TODO: Create a new instance of `libp2p-webrtc-star`, and pass it { wrtc }

let options = {
    modules: {
    transport: [/* TODO: add `libp2p-tcp`, `libp2p-websockets`, and your `libp2p-webrtc-star` instance */]
  }
}

async function main() {
    // Create a libp2p instance
    let libp2p = await util.promisify(createLibp2p)(options)
}

main()