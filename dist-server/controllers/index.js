"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _Resize = _interopRequireDefault(require("../utils/Resize"));

exports.resize = async (req, res) => {
  const imagePath = _path.default.join(__dirname, "../../public/images");

  const fileUpload = new _Resize.default(imagePath);

  if (!req.file) {
    res.status(401).json({
      error: "Please provide an image"
    });
  }

  console.log(req.file);
  const filename = await fileUpload.save(req.file.buffer);
  return res.status(200).json({
    name: filename
  });
};