import {prisma} from '../../database/prisma'
import { User } from '@prisma/client';

export default async ():Promise<User[]> =>{
    return await prisma.user.findMany({
      select: {
          id: true,
          name: true,
          email: true,
        }
      }
    )
}
