import express, { json } from "express";
import cors from 'cors';
import { connect } from "mongoose";
import dotenv from 'dotenv';
import userRoutes from "./routes/user.routes.js";

//Configuracion variable de entorno
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

//middlewares
app.use(cors())
app.use(json())
app.use("/api", userRoutes);

//Routes

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

//mongodb connect

connect(process.env.MONGODB_URI)
  .then(() => console.log("conectado a mgdb atlas"))
  .catch((error) => console.error(error));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
