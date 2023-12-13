import create from "../../repository/questions/create";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getToken } from "../../util/getToken";


interface INewQuestion {
    authHeader: string
    userId: string
    title: string
    content: string

}

export default async ({
    authHeader,
    userId,
    title,
    content
}: INewQuestion) =>{
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




    let question = await create({
        userID: userId,
        title,
        content
    });
    return {
        status:201,
        message: "Pergunta Criada Com Sucesso !",
        data: question,
    }
}
