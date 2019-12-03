const mongoose = require('mongoose')
const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/writtit'


mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB connected...'))
    .catch((err) => console.log(`MongoDB connection error": ${err}`));

module.exports = {
    User: require('./User'),
    Channel: require('./Channel'),
}