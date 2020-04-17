'use-strict'

// TODO: require `pull-stream`

// TODO: define const Protocol with the name of the chat Protocol

function handler (protocol, stream) {
    // TODO: pull stream
    // TODO: collect the stream and log the message
    // TODO: close the stream by pulling stream into pull.empty() 
}

function send (message, stream) {
    // TODO: pull stream
    // TODO: put message to the stream
}

module.exports = {
    PROTOCOL,
    handler,
    send
}
