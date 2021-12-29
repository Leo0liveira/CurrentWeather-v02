const express = require('express');
const request = require('request-promise');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended : true}));

const mongoose = require('mongoose');
const connectDB = require('./db');
connectDB();

const citySchema = new mongoose.Schema({
    name : String
}); 
const cityModel = mongoose.model('City', citySchema);

// roda de forma assincrona um for para cada cidade e adiciona o clima em um objeto e o insere no weather_data que é um vetor e depois nos retorna o mesmo.
async function getWeather(cities){
    const weather_data = [];

    for(let city_object of cities){

        const city = city_object.name;

        //ira esperar o request ser finalizado para continuar
        const response_body = await request( `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=bc602d2a6711c8005f4170be0d8fb944&lang=pt_br`); 
        weather_json = JSON.parse(response_body);
        const weather = {
            cityValue : city,
            temperatureValue : Math.round(weather_json.main.temp),
            descriptionValue : weather_json.weather[0].description,
            minTempValue : Math.round(weather_json.main.temp_min),
            maxTempValue : Math.round(weather_json.main.temp_max),
            feelsLikeValue :Math.round(weather_json.main.feels_like),
            windSpeedValue :weather_json.wind.speed,
            humidityValue : weather_json.main.humidity,
            icon : weather_json.weather[0].icon
        };

        weather_data.push(weather);
    }

    return weather_data;
}


app.get('/', function(req, res){

    cityModel.find({}, function(err, cities){
        getWeather(cities).then(function(results){
            const weather_data = {weather_data : results};    
            res.render('index', weather_data);
        });
    });
});

app.post('/', function(req, res) {

    const newCity = new cityModel({name : req.body.city_name});
    newCity.save();

    res.redirect('/');

});

app.listen(port,function(error) {
    if(error)
        console.log('Erro:', error);
    else
        console.log('Tudo certo por aqui! A porta é : ' + port);
  });