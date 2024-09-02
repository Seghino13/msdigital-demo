import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/db";

class Cart extends Model {
  public id!: number;
  public user_id!: string;
  public status!: string;
}

Cart.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Active", "Inactive"),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "carts",
    timestamps: false,
  }
);

export default Cart;
