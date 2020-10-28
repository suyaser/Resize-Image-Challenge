"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _sharp = _interopRequireDefault(require("sharp"));

var _uuid = require("uuid");

var _path = _interopRequireDefault(require("path"));

class Resize {
  constructor(folder) {
    this.folder = folder;
  }

  async save(buffer) {
    const filename = Resize.filename();
    const filepath = this.filepath(filename);
    await (0, _sharp.default)(buffer).resize(100, 100, {
      withoutEnlargement: true
    }).toFile(filepath);
    return filename;
  }

  static filename() {
    return `${(0, _uuid.v4)()}.png`;
  }

  filepath(filename) {
    return _path.default.resolve(`${this.folder}/${filename}`);
  }

}

module.exports = Resize;