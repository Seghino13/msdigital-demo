import { Request, Response } from "express";
import CartService from "../services/CartService";
import { CartItems } from "./interfaces/cart.interface";

class CartController {
  async getAllCarts(req: Request, res: Response) {
    try {
      const items = await CartService.getAllItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching items" });
    }
  }
  async createCart(req: Request, res: Response) {
    try {
      const newCart = await CartService.createCart(req.body);

      res.status(201).json(newCart);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the cart" });
    }
  }

  async getAllCartsItems(req: Request, res: Response) {
    try {
      const items = await CartService.getAllCartItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching items" });
    }
  }

  async getAllCartItemsByUserId(req: Request, res: Response) {
    try {
      const items = await CartService.getAllCartItemsByUserId(
        Number(req.params.id)
      );
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching items" });
    }
  }
}

export default new CartController();
