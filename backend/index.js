import { database } from "./src/commom/config/database.js"
import express from 'express'
import { PORT } from "./src/commom/constant/app.constant.js";


database();
const app = express()
const port = PORT;

app.use(express.json());


app.listen(port, () => `server online on PORT 3000`);
