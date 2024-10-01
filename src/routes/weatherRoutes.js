import {Router} from "express";
import dotenv from "dotenv";
import {getWeather} from "../controllers/weatherController.js";
dotenv.config();
/**
 * Router for /api/weather routes
 * @type {Router}
 */
const WeatherRoutes = Router();
// /api/weather/getweather
WeatherRoutes.post("/getweather", getWeather);
export default WeatherRoutes;