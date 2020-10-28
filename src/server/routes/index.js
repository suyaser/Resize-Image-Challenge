import express from "express";
import multer from "multer";
import controller from "../controllers";
import { verify } from "../authMiddleware";
const router = express.Router();

const upload = multer({
  limits: {
    fileSize: 4 * 1024 * 1024,
  },
});

router.get("/user", verify, controller.getUser);

router.post("/", verify, upload.single("image"), controller.resize);

router.post("/login", controller.login);

router.patch("/", verify, controller.patch);

module.exports = router;
