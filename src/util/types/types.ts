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

interface OutputOneQuestion {
    title: string
    content: string
    author:{
        name: string
    }
}

interface ResponseLogin {
    status: number
    message: string
    auth?: boolean
    token?: string
}