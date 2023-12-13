import { Router } from "express"
import { QuestionController} from "../controller/questionController";
import { MainPageController } from "../controller/mainPageController";
import { UserController } from "../controller/userController";

const routes = Router();

const main = new MainPageController()

const userController = new UserController();

const questionController = new QuestionController();

routes.get("/", main.mainPage)

routes.post("/user", userController.create)

routes.get("/users", userController.read)

routes.post("/login", userController.login)

routes.post("/:id/create/question", questionController.create)

routes.get("/questions", questionController.read)

export default routes
