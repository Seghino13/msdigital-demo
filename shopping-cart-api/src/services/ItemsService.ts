import Item from "../models/Item.model";

class ItemService {
  async getAllItems() {
    return Item.findAll();
  }

  async getItemById(id: number) {
    return Item.findByPk(id);
  }

  async createItem(data: any) {
    return Item.create(data);
  }

  async updateItem(id: number, data: any) {
    const item = await Item.findByPk(id);
    if (item) {
      return item.update(data);
    }
    return null;
  }

  async deleteItem(id: number) {
    const item = await Item.findByPk(id);
    if (item) {
      return item.destroy();
    }
    return null;
  }
}

export default new ItemService();
