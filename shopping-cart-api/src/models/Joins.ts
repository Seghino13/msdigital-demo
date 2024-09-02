import Cart from "./Cart.model";
import CartItem from "./CartItems.model";
import Item from "./Item.model";
import User from "./User.model";

User.hasMany(Cart, { foreignKey: "user_id" });
Cart.belongsTo(User, { foreignKey: "user_id" });

Cart.hasMany(CartItem, { foreignKey: "cart_id" });
CartItem.belongsTo(Cart, { foreignKey: "cart_id" });

Item.hasMany(CartItem, { foreignKey: "item_id" });
CartItem.belongsTo(Item, { foreignKey: "item_id" });

export { User, Cart, CartItem, Item };
