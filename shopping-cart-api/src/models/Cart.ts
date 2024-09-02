import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/db"; // Instancia de Sequelize
import CartItem from "./CartItem"; // Importar CartItem para la relación

class Cart extends Model {
  public id!: number;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  {
    sequelize,
    modelName: "Cart",
  }
);

// Relación con CartItem
Cart.hasMany(CartItem, { foreignKey: "cartId", as: "items" });

export default Cart;
