const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema(
  {
    // Shortened URL length
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    // Provided URL
    redirectURL: {
      type: String,
      required: true,
    },
    visitHistory: [
      {
        timeStamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
)

const URL = mongoose.model("url", urlSchema)

module.exports = URL
