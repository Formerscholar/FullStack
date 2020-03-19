module.exports = async app => {
  const mongoose = require('mongoose')

  await mongoose.connect('mongodb://localhost:27017/node-vue-moba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}