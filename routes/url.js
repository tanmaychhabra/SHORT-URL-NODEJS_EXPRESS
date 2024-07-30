const express = require("express")
const {
  handleGenerateNewShortURL,
  handleGetUrlById,
} = require("../controllers/url")

const router = express.Router()

// router.post("/", handleGenerateNewShortURL)
router.get("/:shortId", handleGetUrlById)

module.exports = router
