import express from "express";
import LoginController from "../controllers/LoginController";

const loginRouter = express.Router();

loginRouter.post("/", LoginController.login);

export default loginRouter;
