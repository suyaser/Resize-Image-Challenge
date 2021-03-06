"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

var _Resize = _interopRequireDefault(require("../utils/Resize"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _jsonpatch = _interopRequireDefault(require("jsonpatch"));

exports.resize = async (req, res) => {
  let imagePath = _path.default.join(__dirname, "../../build/images");

  if (process.env.NODE_ENV == "development") imagePath = _path.default.join(__dirname, "../../public/images");
  const fileUpload = new _Resize.default(imagePath);

  if (!req.file) {
    res.status(401).json({
      error: "Please provide an image"
    });
  }

  const filename = await fileUpload.save(req.file.buffer);
  return res.status(200).json({
    name: filename
  });
};

exports.login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (!username || !password) {
    return res.status(401).send();
  }

  let payload = {
    username: username
  };

  let accessToken = _jsonwebtoken.default.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: process.env.ACCESS_TOKEN_LIFE
  });

  res.cookie("authCookie", accessToken, {
    maxAge: process.env.ACCESS_TOKEN_LIFE
  });
  res.send();
};

exports.patch = (req, res) => {
  const patchedDoc = _jsonpatch.default.apply_patch(req.body.obj, req.body.patchObj);

  return res.status(200).json(patchedDoc);
};

exports.getUser = (req, res) => {
  var decoded = _jsonwebtoken.default.decode(req.cookies.authCookie);

  return res.status(200).json({
    username: decoded.username
  });
};