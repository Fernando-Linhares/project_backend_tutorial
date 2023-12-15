

const hello_world_controller = {
    index: (req, res) => res.send({
        message: 'hello world',
        app: {
            name: process.env.APP_NAME,
            version: process.env.APP_VERSION,
            database_connected: process.env.CONNECTED
        }
    })
}

export default hello_world_controller;