import {prisma} from '../../database/prisma'
import { User } from '@prisma/client';

interface IDeleteUser {
  userId: string  

}

export default async({
    userId,
   
}: IDeleteUser) =>{
    return await prisma.user.delete({
        where:{
            id: userId
        }        
    })
}