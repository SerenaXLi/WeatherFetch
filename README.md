<div align="center">
  <h1>WeatherFetch</h1>
  <p>Simple API to fetch weather based on location, city, given</p>

  <div>
    <img src="https://img.shields.io/badge/-Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
    <img src="https://img.shields.io/badge/-JavaScript-3178C6?style=for-the-badge&logo=javascript" alt="JavaScript">
  </div>
</div>

## About

WeatherFetch is a simple REST API to fetch the current temperature and the time it was taken from in GMT based on a given location, in this case the city and the country.

## Features

- REST API
- Free (an API key used has a limit on number of requests due to it being free)
- Cleaned outputs
- GeoCoding from city to latitude and longitude

## Technologies

- Express
- JavaScript
- Node.js
- Axios
- body-parser

## How to run

1. Navigate to the root directory of project:

```
git clone https://github.com/SerenaXLi/WeatherFetch.git

cd WeatherFetch
```

2. Install dependancies

```
npm install
```

3. Create .env file

```
touch .env
```

4. Configure .env variables

```
PORT=your_port_number_here
LOCATION_TO_IP_API=your_Api_key_here
```

- Description of variables
  - `PORT`: the port number the server listens on
  - `LOCATION_TO_IP_API`: the api key for geocoding
    - create an account [here](https://locationiq.com/)
    - navigate to dashboard
    - copy the secret api key

5. Run server

```
npm run dev
```

6. Test
   open new terminal

```
curl -X POST \
  http://localhost:YOUR_PORT/api/weather/getweather \
  -H 'Content-Type: application/json' \
  -d '{"city": "Portsmouth", "country": "United Kingdom"}'
```

_If you do not have curl installed, install curl and try again_

**Please use the port you have defined in the `.env` file**

## Potential features

- Dedicated endpoints for different weather information
- Build a frontend for interactive queries and visualisation

Live API on: https://weatherfetch.onrender.com/api/weather/getweather

_As it is hosted on a free plan, the instance spins down with inactivity, therefore if you make a resquest, it may take up to 50 seconds to respond, if it times out, try again in a minute_


- JSDocs with types was used.
