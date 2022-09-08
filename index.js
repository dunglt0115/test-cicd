const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({
    msg: "Hello World"
  })
})

app.listen(3000, () => console.log(`App running on PORT ${PORT}`))