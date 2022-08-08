const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use('/img', express.static('./img'))

app.listen(port, () => {
    console.log(`listen on port : ${port}`)
})