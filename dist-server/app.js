"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _path = _interopRequireDefault(require("path"));

var _routes = _interopRequireDefault(require("./routes"));

require("dotenv").config();

const app = (0, _express.default)();
app.use(_express.default.static(_path.default.join(__dirname, "../build"))); // parse application/x-www-form-urlencoded

app.use(_bodyParser.default.urlencoded({
  extended: true
})); // parse application/json

app.use(_bodyParser.default.json());
app.use((0, _cookieParser.default)());
app.use("/api", _routes.default);
app.get("/*", function (req, res) {
  res.sendFile(_path.default.join(__dirname, "build", "index.html"));
});
app.use(function (req, res, next) {
  next((0, _httpErrors.default)(404));
});
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});
app.listen(process.env.PORT || 8080);