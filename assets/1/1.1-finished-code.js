'use strict'

const Libp2p = require('libp2p')
const TCP = require('libp2p-tcp')

// NOTE: Transport and id are mandatory parameters to create a libp2p instance. Id if not specified will be generated automatically
let options = {
    modules: {
        transport: [ TCP ]
    }
}

async function main() {
    // Create a libp2p instance
    let libp2p = await Libp2p.create(options)
    console.log(libp2p.peerInfo.id.toJSON())
}

main()