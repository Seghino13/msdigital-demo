import { Cart, CartItem, Item, User } from "../models/Joins";

class CartService {
  async getAllItems() {
    return Cart.findAll();
  }
  async createCart(data: any) {
    return Cart.create(data);
  }

  async getAllCartItems() {
    return Cart.findAll({
      include: [
        {
          model: CartItem,
          include: [
            {
              model: Item,
              attributes: [
                "id",
                "name",
                "type",
                "price",
                "description",
                "thumbnail",
              ],
            },
          ],
          attributes: ["id", "quantity"],
        },
        {
          model: User,
          attributes: ["id", "name", "email", "type"],
        },
      ],
      attributes: ["id", "status"],
    });
  }

  async getAllCartItemsByUserId(userId: number) {
    return Cart.findAll({
      where: {
        user_id: userId,
        status: "Active",
      },
      include: [
        {
          model: CartItem,
          include: [
            {
              model: Item,
              attributes: [
                "id",
                "name",
                "type",
                "price",
                "description",
                "thumbnail",
              ],
            },
          ],
          attributes: ["id", "quantity"],
        },
      ],
      attributes: ["id", "status"],
    });
  }

  async getItemCartById(idCart: number) {
    return CartItem.findAll({
      where: {
        cart_id: idCart,
      },
    });
  }
}

export default new CartService();
