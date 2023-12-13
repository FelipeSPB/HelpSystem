import {prisma} from '../../database/prisma'


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
