import {prisma} from '../../database/prisma'

interface IGetQuestion {
    questionId: string
}


export default async ({
    questionId
}:IGetQuestion) =>{
    return await prisma.question.findFirst({
      where:{
        id: questionId
      },  
      select: {
          title: true,
          content: true,
          author:{
            select:{
               name: true,
                }
            } 
          }
      }
    )
}
