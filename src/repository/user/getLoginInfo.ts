import {prisma} from '../../database/prisma'
import { User } from '@prisma/client';

interface ILog{
  email: string,
}


export default async ({email}:ILog):Promise<User> =>{
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
