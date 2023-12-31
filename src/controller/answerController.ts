import {Request, Response} from 'express'
import createAnswer from '../useCases/answers/createAnswer'

interface ICreateAnswerParam {
    userId: string
    questionId: string
}

interface ICreateAnswerBody {
    answer: string
}



export class AnswerController {
    async create(
      request: Request<ICreateAnswerParam,ICreateAnswerBody>,
      response: Response
    ){
      const authHeader = request.headers.authorization as string;
      const { userId, questionId } = request.params
      const {answer} = request.body
 
      const newAnswer = await createAnswer({
        authHeader,
        userId,
        questionId,
        answer,
      })
 
      return response.status(newAnswer.status).send(newAnswer)
    }
}