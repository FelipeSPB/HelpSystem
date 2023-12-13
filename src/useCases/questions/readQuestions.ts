import readAllQuestions from "../../repository/questions/readAllQuestions"
import jwt, { JwtPayload } from "jsonwebtoken"
import { getToken } from "../../util/getToken"

interface IReadQuestions {
    authHeader: string
}


export default async({authHeader}:IReadQuestions) =>{
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
    }catch(error){
        if(error == "JsonWebTokenError: jwt malformed"){
            return {
                status: 401,
                message: "Token Inválido"
            }
        }
    }
    
    let question = await readAllQuestions()
    return {
        status: 200,
        message: "Busca de Questões Feitas",
        data: question

    }
}