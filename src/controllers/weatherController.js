import express from "express";
/**
 * gets weather for given location
 * @param req location
 * @param res weather at location
 * @returns {Promise<express.Response>}
 */
export const getWeather = async (req, res) => {return res.send("weather")}