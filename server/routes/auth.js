import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router(); //base for creating REST API

router.post("/login", login); // this is extension to the /auth and it will be now /auth/login

export default router;