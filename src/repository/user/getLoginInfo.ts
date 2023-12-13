import {prisma} from '../../database/prisma'


interface ILog{
  email: string,
}

export default async ({email}:ILog)=>{
    return await prisma.user.findFirst({
      where:{
        email,
      },
      select: {
          email: true,
          password: true
        }
      }
    )
}
