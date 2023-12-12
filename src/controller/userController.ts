import {Request, Response} from 'express'
import createUser from '../useCases/users/createUser';
import readUser from '../useCases/users/readUser'

interface ICreateUserBody {
    email:string,
    name: string,
    password:string,
}


export class  UserController {
    async create(
        request: Request<ICreateUserBody>,
        response: Response,
    ):Promise<Response>{
        const {email, password, name} = request.body;

        const user = await createUser({
            email,
            name,
            password
        })

        return response.status(user.status).send(user)
    }
    async read(
      request: Request,
      response: Response,
    ){
      let users = await readUser();

      return response.status(200).send(users)
    }
}
