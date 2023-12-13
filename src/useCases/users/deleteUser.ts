import jwt, { JwtPayload } from "jsonwebtoken"
import { getToken } from "../../util/getToken"
import edit from "../../repository/user/edit"
import _delete from "../../repository/user/delete"

interface IDeleteUser {
    authHeader: string
    userId: string
    
}


export default async ({authHeader, userId}:IDeleteUser) =>{
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
   
    let user = await _delete({
        userId,
        });
    return {
        status: 200,
        message: "Usuário Deletado Com Sucesso !",
         }
}
