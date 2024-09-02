import express from "express";
import ItemController from "../controllers/ItemController";

const itemsRouter = express.Router();

itemsRouter.get("/", ItemController.getAllItems);
itemsRouter.get("/:id", ItemController.getItemById);
itemsRouter.post("/", ItemController.createItem);
itemsRouter.put("/:id", ItemController.updateItem);
itemsRouter.delete("/:id", ItemController.deleteItem);

export default itemsRouter;
