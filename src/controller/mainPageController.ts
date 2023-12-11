import {Request, Response} from 'express'

export class  MainPageController {
    async mainPage(
        request: Request,
        response: Response,
    ):Promise<Response>{
        return response.status(200).send("Help System !")
    }
}