import {Request, Response} from 'express'
import createUser from '../useCases/users/createUser';
import readUser from '../useCases/users/readUser'
import login from '../useCases/users/login'

interface ICreateUserBody {
    email:string,
    name: string,
    password:string,
}

interface ILogFields {
  email: string,
  password: string
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
    async login(
      request: Request<ILogFields>,
      response: Response,
    ){
      const {email, password} = request.body;

      const log = await login({
        emailField: email,
        passwordField: password
      })

      return response.status(log.status).send(log)
    }
}
