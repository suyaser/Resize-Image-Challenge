import express from "express";
import multer from "multer";
import controller from "../controllers";
const router = express.Router();

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
});

router.post("/", upload.single("image"), controller.resize);

module.exports = router;
