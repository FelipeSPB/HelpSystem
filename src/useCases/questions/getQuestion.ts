import readOneQuestion from "../../repository/questions/readOneQuestion"

interface IGetQuestion {
    questionId: string
}

export default async({questionId}:IGetQuestion) =>{
    let question = await readOneQuestion({questionId})
    return {
        status: 200,
        message: "Busca de Questões Feitas",
        data: question

    }
}