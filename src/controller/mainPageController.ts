import {Request, Response} from 'express'

export class  MainPageController {
    async mainPage(
        request: Request,
        response: Response<ResponseLogin>,
    ){
        return response.status(200).sendFile("login.html", {root: "./public/"})
    }
    async questions(
        request: Request,
        response: Response<ResponseLogin>,
    ){
        return response.status(200).sendFile("forum.html", {root: "./public/"})
    }
}