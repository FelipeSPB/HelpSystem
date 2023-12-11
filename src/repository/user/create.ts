import { randomUUID } from 'crypto';
import {prisma} from '../../database/prisma'
import { User } from '@prisma/client';

interface ICreateUser {
  name:  string,
  email: string,
  password: string,
}


export default async({
    name,
    email,
    password
}: ICreateUser): Promise<User> =>{
    return await prisma.user.create({
        data: {
            name,
            email,
            password
        }
    })
}