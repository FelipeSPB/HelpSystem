import {Request, Response} from 'express'
import createUser from '../useCases/users/createUser';
import readUser from '../useCases/users/readUser'
import login from '../useCases/users/login'
import editUser from '../useCases/users/editUser';
import deleteUser from '../useCases/users/deleteUser';

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

interface IUserParam{
  userId: string
}

interface IEditUserBody{
    email:string
    name: string
    isAdmin: boolean
    password:string
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
    async edit(
      request: Request<IUserParam, IEditUserBody>,
      response: Response,
  ):Promise<Response>{
      const authHeader = request.headers.authorization as string;
      const {userId} = request.params
      const {email, password, name, isAdmin} = request.body;

      const user = await editUser({
          authHeader,
          userId,
          email,
          name,
          isAdmin,
          password
      })

      return response.status(user.status).send(user)
  }
  async delete(
    request: Request<IUserParam>,
    response: Response,
):Promise<Response>{
    const authHeader = request.headers.authorization as string;
    const {userId} = request.params
    
    const user = await deleteUser({
        authHeader,
        userId,
                 })

    return response.status(user.status).send(user)
}
}
