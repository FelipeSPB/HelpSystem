window.onload = async () => {
   
    await axios.get("http://localhost:3333/questions",{
        headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
         },
     
    },)
     .catch((error)=>{
        alert(error.response.data.message)
      })
      .then((response) => {
        const perguntasQuery = (response.data.data)
        const div = document.getElementById('questionsClass')
        const divNew = document.createElement('div')
        divNew.className = "container"
        div.appendChild(divNew)

        
        console.log(perguntasQuery)
      })
    }
