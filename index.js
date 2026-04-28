const express = require('express');
const app = express()
const socket = require('socket.io')


app.use(express.static('public'))

const server = app.listen(3100, ()=>{
    console.log('Server is running on http://localhost:3100')
})

const io = socket(server)

io.on('connection', (socket) => {
    console.log('New client connection', socket.id)
})