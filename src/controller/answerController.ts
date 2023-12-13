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
      const { userId, questionId } = request.params
      const {answer} = request.body
 
      const newAnswer = await createAnswer({
        userId,
        questionId,
        answer,
      })
 
      return response.status(newAnswer.status).send(newAnswer)
    }
}