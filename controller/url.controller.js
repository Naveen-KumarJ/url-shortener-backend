const { nanoid } = require("nanoid");
const path = require("path");
const urlModel = require("../model/url.model");

const sendHtmlFile = (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
};

const generateShortUrl = async (req, res) => {
  try {
    if (!req.body.url) {
      return res.status(400).json({
        success: false,
        message: "URL is required",
      });
    }

    const id = nanoid(8);
    await urlModel.create({
      shortUrl: id,
      originalUrl: req.body.url,
    });

    res.json({
      success: true,
      shortUrl: `https://url-shortener-backend-vt1k.onrender.com/${id}`,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error in generating Short URL",
    });
  }
};

const redirectToMainUrl = async (req, res) => {
  try {
    const urlEntry = await urlModel.findOne({ shortUrl: req.params.shorturl });

    if (!urlEntry) {
      return res.status(404).send("Short URL not found");
    }
    urlEntry.clickCount += 1;
    await urlEntry.save();
    res.redirect(urlEntry.originalUrl);
  } catch (error) {
    x``;
    console.error("Error during redirect:", error);
    res.status(500).send("Server Error");
  }
};

const urlController = {
  sendHtmlFile,
  generateShortUrl,
  redirectToMainUrl,
};

module.exports = urlController;
