import readAllUsers from "../../repository/user/readAllUsers";



export default async () =>{
    let user = await readAllUsers();
    return {
        status: 200,
        message: "Busca Feita Com Sucesso !",
        data: user,
    }
}
