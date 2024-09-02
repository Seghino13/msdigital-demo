import { Request, Response } from "express";
import UserService from "../services/UserService";
import { environments } from "../utils/environments";
//const encryptpwd = require("encrypt-with-password");

class UserController {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching items" });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const user = await UserService.getUserById(Number(req.params.id));
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching the User" });
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const email = req?.body?.email;
      const hasEmail = await UserService.getUserByEmail(email);
      if (hasEmail) {
        res.status(201).json({ error: "User exists" });
        return;
      }
      const request = req.body;
      /* request.password = encryptpwd.encrypt(
        request.password,
        environments.passwordHash
      ); */
      const newUser = await UserService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the User" });
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const updatedItem = await UserService.updateUser(
        Number(req.params.id),
        req.body
      );
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the User" });
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const deleted = await UserService.deleteUser(Number(req.params.id));
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "User not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while deleting the User" });
    }
  }
}

export default new UserController();
