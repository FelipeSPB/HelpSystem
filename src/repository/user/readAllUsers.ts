import {prisma} from '../../database/prisma'
import { User } from '@prisma/client';

export default async ():Promise<OutputUsers[]> =>{
    return await prisma.user.findMany({
      select: {
          id: true,
          name: true,
          email: true,
          }
      }
    )
}
