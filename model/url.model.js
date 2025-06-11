const mongoose = require("mongoose");

const urlSchema = mongoose.Schema({
  shortUrl: {
    type: String,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  clickCount: {
    type: Number,
    default: 0, 
  },
},{
    timestamps:true
});

const urlModel = mongoose.model("urls", urlSchema);
module.exports = urlModel;
