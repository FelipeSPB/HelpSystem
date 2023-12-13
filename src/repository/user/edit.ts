import {prisma} from '../../database/prisma'
import { User } from '@prisma/client';

interface IEditUser {
  userId: string  
  name:  string,
  email: string,
  isAdmin: boolean,
  password: string,
}


export default async({
    userId,
    name,
    email,
    isAdmin,
    password
}: IEditUser): Promise<User> =>{
    return await prisma.user.update({
        where:{
            id: userId
        },
        data: {
            name,
            email,
            is_admin: isAdmin,
            password
                }
    })
}