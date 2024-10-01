import express from "express";
import dotenv from "dotenv";
import NodeGeocoder from "node-geocoder";
import axios from "axios";
dotenv.config();
/**
 * options from node_geocoder with a provider and an API key
 * @type {{apiKey: string, provider: string}}
 */
const options = {
    provider: 'locationiq',
    apiKey: process.env.LOCATION_TO_IP_API
};
/**
 * instance of node_geocoder with options configured
 * @type {node_geocoder.Geocoder}
 */
const geoCoder = NodeGeocoder(options);


/**
 * gets weather for given location
 * @param req location
 * @param res weather at location
 * @returns {Promise<express.Response>}
 */
export const getWeather = async (req, res) => {

    const {city,country} = req.body;



    const result = await geoCoder.geocode(`${city}, ${country}`);
    if (!result){
        return res.status(404).send("city not found");
    }

    const lat = result[0].latitude;
    const long = result[0].longitude;
    const url = "https://api.open-meteo.com/v1/forecast"
    const params = {
    "latitude": lat,
        "longitude": long,
        "hourly": "temperature_2m"
    }
    const weather = await axios.get(url, {params});

    const response = {
        temperature: weather.data.hourly.temperature_2m[0],
        time_GMT: weather.data.hourly.time[0],
    }
    console.log(response)

    return res.status(200).json(response);
}
