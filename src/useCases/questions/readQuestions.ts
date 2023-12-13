import readAllQuestions from "../../repository/questions/readAllQuestions"


export default async() =>{
    let question = await readAllQuestions()
    return {
        status: 200,
        message: "Busca de Questões Feitas",
        data: question

    }
}