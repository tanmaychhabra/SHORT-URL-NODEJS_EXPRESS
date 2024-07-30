const shortid = require("shortid")
const URL = require("../models/url")

async function handleGenerateNewShortURL(req, res) {
  const body = req.body
  if (!body.url) return res.status(400).json({ error: "url is required" })
  const shortID = shortid()
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitedHistory: [],
  })
  return res.json({ id: shortID })
}

async function handleGetUrlById(req, res) {
  const shortId = req.params.shortId
  const entry = await URL.findOne({
    shortId: shortId,
  })
  const redirectURL = entry.redirectURL
  console.log("Entry redirect URL:", redirectURL)
  return res.redirect(redirectURL)
}

module.exports = {
  handleGenerateNewShortURL,
  handleGetUrlById,
}
