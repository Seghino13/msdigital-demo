import { Request, Response } from "express";
import ItemService from "../services/ItemsService";

class ItemController {
  async getAllItems(req: Request, res: Response) {
    try {
      const items = await ItemService.getAllItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching items" });
    }
  }

  async getItemById(req: Request, res: Response) {
    try {
      const item = await ItemService.getItemById(Number(req.params.id));
      if (item) {
        res.json(item);
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while fetching the item" });
    }
  }

  async createItem(req: Request, res: Response) {
    try {
      const newItem = await ItemService.createItem(req.body);
      res.status(201).json(newItem);
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while creating the item" });
    }
  }

  async updateItem(req: Request, res: Response) {
    try {
      const updatedItem = await ItemService.updateItem(
        Number(req.params.id),
        req.body
      );
      if (updatedItem) {
        res.json(updatedItem);
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while updating the item" });
    }
  }

  async deleteItem(req: Request, res: Response) {
    try {
      const deleted = await ItemService.deleteItem(Number(req.params.id));
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ error: "Item not found" });
      }
    } catch (error) {
      res
        .status(500)
        .json({ error: "An error occurred while deleting the item" });
    }
  }
}

export default new ItemController();
