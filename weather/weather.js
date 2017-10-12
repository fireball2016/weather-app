const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: 'https://api.darksky.net/forecast/4b3d642f1300144279de14a61849c6ef/' + lat + ',' + lng,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to forecast.io servers');
    }
    else if (response.statusCode === 400) {
      callback('Unable to fetch weather');
    }
    else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};

module.exports.getWeather = getWeather;
