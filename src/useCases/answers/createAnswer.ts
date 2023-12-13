import create from "../../repository/answer/create";

interface INewAnswer {
    userId: string
    questionId: string
    answer: string

}

export default async ({
    userId,
    questionId,
    answer
}: INewAnswer) =>{
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
