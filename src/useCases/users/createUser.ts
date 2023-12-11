import create from "../../repository/user/create";

interface INewUser {
    email: string,
    name: string,
    password: string,
}

export default async ({
    email,
    name,
    password
}: INewUser) =>{
    let user = await create({
        name,email,password
    });
    return {
        status:201,
        message: "Usuário Criado Com Sucesso !",
        data: user,
    }

}