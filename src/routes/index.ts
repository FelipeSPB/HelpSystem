import { Router } from "express"
import { QuestionController} from "../controller/questionController";
import { MainPageController } from "../controller/mainPageController";
import { UserController } from "../controller/userController";
import { AnswerController } from "../controller/answerController";

const routes = Router();

const main = new MainPageController()

const userController = new UserController();

const questionController = new QuestionController();

const answerController = new AnswerController();

routes.get("/", main.mainPage)

routes.post("/user", userController.create)

routes.get("/users", userController.read)

routes.post("/login", userController.login)

routes.post("/:id/create/question", questionController.create)

routes.get("/questions", questionController.read)

routes.get("/question/:questionId", questionController.getOneQuestion)

routes.post("/answer/question/:questionId/:userId", answerController.create)

routes.put("/user/:userId", userController.edit)

routes.delete("/user/:userId", userController.delete)

export default routes
