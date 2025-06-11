const express = require("express");
const router = express.Router();
const {
  sendHtmlFile,
  generateShortUrl,
  redirectToMainUrl,
} = require("../controller/url.controller.js");


router.get("/", sendHtmlFile);

router.post("/generateShorturl", generateShortUrl);

router.get("/:shorturl", redirectToMainUrl);

router.use("", (req, res) => {
  res.status(400).json({
    success: false,
    message: "Invalid URL",
  });
});

module.exports = router;
