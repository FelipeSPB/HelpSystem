import {Config} from "../../config"
import jwt from "jsonwebtoken"
import getLoginInfo from '../../repository/user/getLoginInfo'

interface ILoginInfo {
  emailField: string
  passwordField: string
}


export default async ({
  emailField,
  passwordField
}:ILoginInfo) =>{
    if(!emailField || emailField == "" || !passwordField || passwordField == ""){
      return {
        status: 400,
        message: "Os Campos De Email ou Senha Estão Vazios",
      }
    }
    let user = await getLoginInfo({email: emailField});

    if(!user){
      return{
          status: 400,
          message: "Usuário Não Encontrado",
        }
    }
    if(user.password != passwordField){
      return{
          status: 403,
          message: "Senha Errada",
        }
      }

      const secret = Config.SECRET__JWT_KEY
      const token = jwt.sign(
        {
          id: user.id,
          name: user.name,
          email: user.email,
          isAdmin: user.is_admin
        },
        secret,
        {
          expiresIn: 6000
        }
      )
        return {
            status: 200,
            message: "Login Feito Com Sucesso",
            auth: true,
            token: token!
        }
       
}
