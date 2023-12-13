import readAllUsers from "../../repository/user/readAllUsers";
import jwt, { JwtPayload } from "jsonwebtoken"
import {Config} from "../../config"
import { getToken } from "../../util/getToken"

interface IReadUsers {
    authHeader: string
}


export default async ({authHeader}:IReadUsers) =>{
    if(!authHeader){
        return {
            status: 403,
            message: "Você Não Tem Autorização",
         }
    }

    const auth = getToken(authHeader)
    try{
        const decoded = jwt.verify(
        auth.token!,
        auth.secret!
    ) as JwtPayload
       if(decoded.auth == false){
        return {
            status: 403,
            message: "Você Não Tem Autorização",
         }
        }
        else if (decoded.is_admin == false){
            return {
                status: 403,
                message: "Você Não Tem Autorização",
             }
        }
    }catch(error){
        if(error == "JsonWebTokenError: jwt malformed"){
            return {
                status: 401,
                message: "Token Inválido"
            }
        }
    }
   
    let user = await readAllUsers();
    return {
        status: 200,
        message: "Busca Feita Com Sucesso !",
        data: user,
    }
}
