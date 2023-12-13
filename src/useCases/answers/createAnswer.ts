import create from "../../repository/answer/create";
import jwt, { JwtPayload } from "jsonwebtoken";
import { getToken } from "../../util/getToken";

interface INewAnswer {
    authHeader: string
    userId: string
    questionId: string
    answer: string

}

export default async ({
    authHeader,
    userId,
    questionId,
    answer
}: INewAnswer) =>{

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
       if(!decoded.auth == false){
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

    let answerCreate = await create({
        userID: userId,
        questionID: questionId,
        answer
    });
    return {
        status:201,
        message: "Resposta Feita Com Sucesso !",
        data: answerCreate,
    }
}
