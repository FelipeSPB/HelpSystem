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

    console.log(user)

    if(user.password != passwordField){
      return{
          status: 403,
          message: "Senha Errada",
        }
    }else{
        return {
            status: 200,
            message: "Login Feito Com Sucesso",

          }
        }
}
