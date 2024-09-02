import express from "express";
import errorHandler from "./middlewares/errorHandler";
import sequelize from "./utils/db";
import itemsRouter from "./routes/itemRoutes";
import userRouter from "./routes/userRoutes";
import loginRouter from "./routes/loginRoutes";
import cartRouter from "./routes/cartRoutes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/items", itemsRouter);
app.use("/api/users", userRouter);
app.use("/api/login", loginRouter);
app.use("/api/cart", cartRouter);
app.use(errorHandler);

sequelize.sync().then(() => {
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
