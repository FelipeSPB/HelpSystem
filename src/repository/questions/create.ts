import {prisma} from '../../database/prisma'
import { User } from '@prisma/client';

interface ICreateQuestion {
  userID: string
  title: string
  content: string
}


export default async({
    userID,
    title,
    content
}: ICreateQuestion) => {
    return await prisma.question.create({
        data: {
          content,
          title,
          userId: userID,
        },
        select:{
          title: true,
          content: true,
          author: {
            select:{
              name: true
            }
          }
        }
    })
}
