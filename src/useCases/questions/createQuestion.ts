import create from "../../repository/questions/create";

interface INewQuestion {
    userId: string,
    title: string,
    content: string,

}

export default async ({
    userId,
    title,
    content
}: INewQuestion) =>{
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
