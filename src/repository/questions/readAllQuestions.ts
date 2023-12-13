import {prisma} from '../../database/prisma'


export default async () =>{
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
