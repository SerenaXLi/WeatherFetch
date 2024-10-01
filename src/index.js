import express from "express";
import dotenv from "dotenv";
import weatherRoutes from "./routes/weatherRoutes.js";
dotenv.config();
/**
 * Instance of express
 * @type {Express}
 */
const app = express();
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
