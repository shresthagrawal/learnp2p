'use-strict'

// Require `libp2p` module
// Require `libp2p-tcp` module


// Add mandatory transport options needed to create libp2p instance
let options = {
    modules: {
        transport: [ /* TODO: add `libp2p-tcp` instance */ ]
    }
}

// Declare async main
// Inside main declare libp2p node using `create` method of Libp2p module and pass options
// See for youself the id of the libp2p node we have created by using libp2p node's peerInfo.id.toJSON()

// Call main
