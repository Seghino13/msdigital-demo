import { DataTypes, Model } from "sequelize";
import sequelize from "../utils/db"; // Instancia de Sequelize
import Item from "./Item"; // Importar Item para la relación

class CartItem extends Model {
  public id!: number;
  public cartId!: number;
  public itemId!: number;
  public quantity!: number;
}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cartId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    sequelize,
    modelName: "CartItem",
  }
);

// Relación con Cart e Item
//CartItem.belongsTo(Cart, { foreignKey: "cartId", as: "cart" });
CartItem.belongsTo(Item, { foreignKey: "itemId", as: "item" });

export default CartItem;
