import { Router } from "express";
import express from "express";
import CreateUser from "../../../../application/services/CreateUser";
import UserPersistence  from "../../db/UserPersistence";

export default new class UserController {
    router: Router;
    createUser: CreateUser;

    constructor() { 
        this.router = express.Router(); this.initializeRoutes(); 
        this.createUser = new CreateUser( UserPersistence );
    }

    initializeRoutes() {
        this.router.get("/test", (req, res) => {
            res.send("Hello User!");
        });

        this.router.post("/create", (req, res) => {
            const { name, email, password } = req.body;
            try {
                const user = this.createUser.execute(name, email, password);
                res.send(user);
            } catch (error: any) {
                res.status(400).send((error as Error).message);
            }
        });
    };
}