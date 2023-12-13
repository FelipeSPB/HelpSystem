import {Request, Response} from 'express'

import createQuestion from '../useCases/questions/createQuestion'
import readQuestions from '../useCases/questions/readQuestions'
import getQuestion from '../useCases/questions/getQuestion'

interface ICreateQuestionParam {
  id: string
}

interface ICreateQuestionBody {
  title: string
  content: string
}

interface IGetAQuestion {
  questionId: string
}

interface IGetAllQuestions {
  authHeader: string
}

export class QuestionController {
   async create(
     request: Request<ICreateQuestionParam,ICreateQuestionBody>,
     response: Response
   ){
     const { id } = request.params
     const {title, content} = request.body

     const question = await createQuestion({
       userId: id,
       title,
       content,
     })

     return response.status(question.status).send(question)
   }
   async read(
    request: Request<IGetAllQuestions>,
    response: Response
   ){

    const authHeader = request.headers.authorization as string;
      const questions = await readQuestions({
        authHeader
      })

      return response.status(questions.status).send(questions)
   }
   async getOneQuestion(
    request: Request<IGetAQuestion>,
    response: Response
   ){
    const { questionId } = request.params

    const get = await getQuestion({
      questionId,
    })

    return response.status(get.status).send(get)

   }
}
