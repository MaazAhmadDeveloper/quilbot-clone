import express from "express";
import addUser from "../controllers/userController.js";
import sendText from "../controllers/sendTextController.js";

const routes = express.Router();


routes.post("/addUser" , addUser );
routes.post("/sendText" , sendText );


export default routes;

