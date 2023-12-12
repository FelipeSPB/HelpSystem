import {Request, Response} from 'express'

import createQuestion from '../useCases/questions/createQuestion'

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
     const id = request.params
     const {title, content} = request.body

     console.log(title)

     const question = await createQuestion({
       userId: id,
       title,
       content,
     })

     return response.status(question.status).send(question)
   }
}
