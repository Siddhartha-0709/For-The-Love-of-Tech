import { Router } from "express";
import {videoUpload, getVideos, getVideosbyCourseName} from "../controllers/video.controller.js";
const router = Router();

router.route("/upload").post(videoUpload);
router.route("/get").get(getVideos);
router.route("/getbycourse/:courseName").get(getVideosbyCourseName);

export default router;