import express, { json } from "express";
import cors from 'cors';
import { connect } from "mongoose";
import dotenv from 'dotenv';
import userRoutes from "./routes/user.routes.js";
import path from 'node:path';
import {join} from 'node:path';
import { fileURLToPath } from 'node:url';



//Configuracion variable de entorno
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__dirname);

const PORT = process.env.PORT || 4000;

//middlewares
app.use(cors())
app.use(json())
app.use("/api", userRoutes);
//
app.use(express.static(join(__dirname, '../public')))

//Routes

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

//mongodb connect

connect(process.env.MONGODB_URI)
  .then(() => console.log("conectado a mgdb atlas"))
  .catch((error) => console.error(error));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
