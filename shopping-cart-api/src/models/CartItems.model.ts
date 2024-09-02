import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/db";

class CartItem extends Model {
  public id!: number;
  public cart_id!: number;
  public item_id!: number;
  public quantity!: number;
}

CartItem.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    cart_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "cart_items",
    timestamps: false,
  }
);

export default CartItem;
