"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _multer = _interopRequireDefault(require("multer"));

var _controllers = _interopRequireDefault(require("../controllers"));

const router = _express.default.Router();

const upload = (0, _multer.default)({
  limits: {
    fileSize: 4 * 1024 * 1024
  }
});
router.post("/", upload.single("image"), _controllers.default.resize);
module.exports = router;