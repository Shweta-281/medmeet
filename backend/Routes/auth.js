import express from "express";
import { register, login } from "../Controllers/authController.js";

//This router will be used to define and handle authentication-related routes.
const router = express.Router();

//  This route is for user registration. When a POST request is made to "/register," it invokes the register function from your "authController.js."
router.post("/register", register);
// This route is for user login. When a POST request is made to "/login," it invokes the login function from your "authController.js."
router.post("/login", login);

export default router;