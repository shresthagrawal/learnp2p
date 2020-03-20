'use strict'

const util = require('util');
const { createLibp2p } = require('libp2p')

async function main() {
    // Create a libp2p instance
    let libp2p = await util.promisify(createLibp2p)()
}

main()