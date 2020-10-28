import createError from "http-errors";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import router from "./routes";
const app = express();

app.use(express.static(path.join(__dirname, "../build")));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use("/api", router);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({
    message: err.message,
  });
});

app.listen(process.env.PORT || 8080);
