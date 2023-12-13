import {Config} from '../config'

export const getToken = (authHeader: string) =>{
    const [,token] = authHeader.split(" ")
    if(!token){
        return {
            status: 403,
            message: "Você Não Tem Autorização",
         }
    }else{
        return {token, secret: Config.SECRET__JWT_KEY}
    }
}