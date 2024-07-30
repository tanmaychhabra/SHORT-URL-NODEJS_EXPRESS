const mongoose = require("mongoose")

async function handleConnectMongoDB(url) {
  return await mongoose.connect(url)
}

module.exports = { handleConnectMongoDB }
