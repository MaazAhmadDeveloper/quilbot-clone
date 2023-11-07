import express  from "express";
import bodyParser from "body-parser";
import cors from "cors"
import dbConnection from "./database/db.js";
import routes from "./routes/allRoutes.js";

const app = express();
const PORT = 8000;

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

dbConnection();

app.use( "/" , routes )

 

app.listen( PORT , ()=>{
    console.log("server is running on port " + PORT);
} )