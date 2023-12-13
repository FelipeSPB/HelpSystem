import create from "../../repository/user/create";

interface INewUser {
    email: string,
    name: string,
    isAdmin: boolean,
    password: string,
}

export default async ({
    email,
    name,
    isAdmin,
    password
}: INewUser) =>{
    let user = await create({
        name,email,isAdmin,password
    });
    return {
        status:201,
        message: "Usuário Criado Com Sucesso !",
        data: user,
    }
}
