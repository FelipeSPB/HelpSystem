import {prisma} from '../../database/prisma'
import { User } from '@prisma/client';

interface ICreateUser {
  name:  string,
  email: string,
  isAdmin: boolean,
  password: string,
}


export default async({
    name,
    email,
    isAdmin,
    password
}: ICreateUser): Promise<User> =>{
    return await prisma.user.create({
        data: {
            name,
            email,
            is_admin: isAdmin,
            password
                }
    })
}