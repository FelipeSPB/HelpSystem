import { Router } from "express"

import { MainPageController } from "../controller/mainPageController";
import { UserController } from "../controller/userController";

const routes = Router();

const main = new MainPageController()

const userController = new UserController();

routes.get("/", main.mainPage)

routes.post("/user", userController.create)

routes.get("/users", userController.read)

export default routes
