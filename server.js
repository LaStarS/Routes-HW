const express = require('express')
const app = express()

const PORT = 8082

const routers = require('routers')

app.use('Index', routers)

  app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})