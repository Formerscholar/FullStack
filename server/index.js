const express = require('express')

const app = express()
//监听的端口
const port = 3000;

app.set('secret', 'q5s4fq8e461q35g')

app.use(require('cors')())
app.use(express.json())
app.use('/uploads', express.static(__dirname + '/uploads'))


require('./plugins/db')(app)

require('./routes/admin/index')(app)



module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  } else {
    console.log('Listening at http://localhost:' + port)
  }
})