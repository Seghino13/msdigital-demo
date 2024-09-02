import { Sequelize } from "sequelize";

const sequelize = new Sequelize("shopping_cart", "root", "rootpassword", {
  host: "127.0.0.1",
  dialect: "mysql",
});

export default sequelize;
