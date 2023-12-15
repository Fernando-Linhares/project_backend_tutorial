import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import dotenv from "dotenv";
import api from '../routes/api.js'
import connection from '../database/connection.js';

const app = express();

dotenv.config();

connection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(api());

app.listen(3000, () => console.log('server is listening ...'));