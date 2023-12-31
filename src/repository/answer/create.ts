import {prisma} from '../../database/prisma'
import { User } from '@prisma/client';

interface ICreateAnswer {
  userID: string
  questionID: string
  answer: string
}


export default async({
    userID,
    questionID,
    answer
}: ICreateAnswer) => {
    return await prisma.answer.create({
        data: {
            author_id: userID,
            question_id: questionID,
            answer,

        },
        select:{
           question:{
               select:{
                title:true,
                content: true,
                    author: {
                        select:{
                                name: true
                                }
                            },
                    }
                },
            answer: true,
            author: {
                select:{
                    name: true
                }
            }
        }
    })
}
