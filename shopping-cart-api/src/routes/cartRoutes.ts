import express from "express";
import CartController from "../controllers/CartController";

const cartRouter = express.Router();

cartRouter.post("/", CartController.createCart);
cartRouter.get("/", CartController.getAllCarts);

cartRouter.get("/items", CartController.getAllCartsItems);
cartRouter.get("/items/:id", CartController.getAllCartItemsByUserId);

export default cartRouter;
