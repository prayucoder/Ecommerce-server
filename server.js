import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', Router);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const port = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI || `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce-web.wdk5xyt.mongodb.net/?retryWrites=true&w=majority`;

Connection(URI);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(port, () => console.log(`Server is running on ${port} hello`));

DefaultData();