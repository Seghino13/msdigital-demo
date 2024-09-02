import { Model, DataTypes } from "sequelize";
import sequelize from "../utils/db";

class Item extends Model {
  public id!: number;
  public name!: string;
  public type!: string;
  public price!: number;
  public thumbnail!: string;
  public description!: string;
}

Item.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM("Producto", "Evento"),
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "items",
    timestamps: false,
  }
);

export default Item;
