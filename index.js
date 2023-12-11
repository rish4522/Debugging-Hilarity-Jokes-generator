import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

const API_URL = " https://v2.jokeapi.dev/joke/";

app.get("/", async(req, res) => {
    try {
        res.render("index.ejs");
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/programming-joke", async(req, res) => {
    try {
        const jokeFormat = "?format=json&type=single";
        const result = await axios.get(API_URL + "Programming" + jokeFormat);
        res.render("index.ejs", {
            content : result.data.joke
        });
        console.log(result.data.joke);
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/pun-joke", async(req, res) => {
    try {
        const jokeFormat = "?format=json&type=single";
        const result = await axios.get(API_URL + "Pun" + jokeFormat);
        res.render("index.ejs", {
            content : result.data.joke
        });
        console.log(result.data.joke);
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.get("/dark-joke", async(req, res) => {
    try {
        const jokeFormat = "?format=json&type=single";
        const result = await axios.get(API_URL + "Dark" + jokeFormat);
        res.render("index.ejs", {
            content : result.data.joke
        });
        console.log(result.data.joke);
    } catch (error) {
        console.log(error.response.data);
        res.status(500);
    }
});

app.listen(port, () => {
    console.log("Server running on port : " + port);
});