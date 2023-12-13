import {Request, Response} from 'express'

import createQuestion from '../useCases/questions/createQuestion'
import readQuestions from '../useCases/questions/readQuestions'

interface ICreateQuestionParam {
  id: string
}

interface ICreateQuestionBody {
  title: string
  content: string
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
    request: Request,
    response: Response
   ){
      const questions = await readQuestions()

      return response.status(questions.status).send(questions)
   }
}
