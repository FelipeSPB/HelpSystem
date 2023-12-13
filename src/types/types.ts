interface OutputUsers {
    id: string
    name: string
    email: string
} 

interface OutputQuestions {
    id: string
    author:{
        name: string
    }
    title: string
    content: string
}