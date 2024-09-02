import { Request, Response } from "express";
import UserService from "../services/UserService";
import { environments } from "../utils/environments";
//const encryptpwd = require("encrypt-with-password");

class LoginController {
  async login(req: Request, res: Response) {
    try {
      const user = await UserService.getUserByEmail(req?.body?.email);
      if (user) {
        /*  const password = encryptpwd.decrypt(
          user?.password,
          environments.passwordHash
        ); */
        if (user?.password !== req?.body?.password) {
          res.status(400).json({ error: "User or password failed" });
          return;
        }
        res.json(user);
        return;
      }
      res.status(400).json({ error: "User or password failed" });
    } catch (error) {
      res.status(500).json({ error: "An error occurred while the User" });
    }
  }
}

export default new LoginController();
