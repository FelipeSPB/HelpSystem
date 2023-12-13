import { title } from 'process'
import {prisma} from '../../database/prisma'


export default async ():Promise<OutputQuestions[]> =>{
    return await prisma.question.findMany({
      select: {
          id: true,
          author:{
             select:{
                name: true,
             }
          } ,
          title: true,
          content: true,
          }
      }
    )
}
