import { Router } from "express";
import express from "express";

export default new class UserController {
    router: Router;

    constructor() { 
        this.router = express.Router(); this.initializeRoutes(); 
    }

    initializeRoutes() {
        this.router.get("/test", (req, res) => {
            res.send("Hello User!");
        });
    };
}