import express from "express";
import dotenv from "dotenv";
import weatherRoutes from "./routes/weatherRoutes.js";
import bodyParser from "body-parser";
dotenv.config();
/**
 * Instance of express
 * @type {Express}
 */
const app = express();
app.use(bodyParser.json());
/**
 * port number
 * @type {number}
 */
const port = process.env.PORT || 3001;
//set up routes
app.use("/api/weather", weatherRoutes)
/**
 * express application
 * @type {http.Server}
 */
const server = app.listen(port, () => {
  console.log(`app is running and listening on: ${port}`);
});
