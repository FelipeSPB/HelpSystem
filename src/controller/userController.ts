import {Request, Response} from 'express'
import createUser from '../useCases/users/createUser';
import readUser from '../useCases/users/readUser'
import login from '../useCases/users/login'

interface ICreateUserBody {
    email:string
    name: string
    isAdmin: boolean
    password:string
}

interface ILogFields {
  email: string
  password: string
}

interface IReadUser {
  authHeader: string
}

export class  UserController {
    async create(
        request: Request<ICreateUserBody>,
        response: Response,
    ):Promise<Response>{
        const {email, password, name, isAdmin} = request.body;

        const user = await createUser({
            email,
            name,
            isAdmin,
            password
        })

        return response.status(user.status).send(user)
    }
    async read(
      request: Request<IReadUser>,
      response: Response,
    ){

      const authHeader = request.headers.authorization as string;

      let users = await readUser({authHeader});

      return response.status(users.status).send(users)
    }
    async login(
      request: Request,
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
