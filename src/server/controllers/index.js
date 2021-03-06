import path from "path";
import Resize from "../utils/Resize";
import jwt from "jsonwebtoken";
import jsonpatch from "jsonpatch";

exports.resize = async (req, res) => {
  let imagePath = path.join(__dirname, "../../build/images");
  if (process.env.NODE_ENV == "development")
    imagePath = path.join(__dirname, "../../public/images");
  const fileUpload = new Resize(imagePath);
  if (!req.file) {
    res.status(401).json({ error: "Please provide an image" });
  }

  const filename = await fileUpload.save(req.file.buffer);
  return res.status(200).json({ name: filename });
};

exports.login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  if (!username || !password) {
    return res.status(401).send();
  }
  let payload = { username: username };

  let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
    algorithm: "HS256",
    expiresIn: process.env.ACCESS_TOKEN_LIFE,
  });
  res.cookie("authCookie", accessToken, {
    maxAge: process.env.ACCESS_TOKEN_LIFE,
  });

  res.send();
};

exports.patch = (req, res) => {
  const patchedDoc = jsonpatch.apply_patch(req.body.obj, req.body.patchObj);
  return res.status(200).json(patchedDoc);
};

exports.getUser = (req, res) => {
  var decoded = jwt.decode(req.cookies.authCookie);
  return res.status(200).json({ username: decoded.username });
};
