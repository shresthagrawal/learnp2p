'use-strict'

const pull = require('pull-stream')

const PROTOCOL = '/libp2p/chat/1.0.0'

function handler (protocol, stream) {
    pull (
        stream,
        pull.collect((err, message) => {
            if(err) throw console.error(err)
            console.info(String(message))
            // Close the stream immediately
            pull(pull.empty(), stream)
        })
    )
}

function send (message, stream) {
    pull (
        pull.values([ message ]),
        stream
    )
}

module.exports = {
    PROTOCOL,
    handler,
    send
}
