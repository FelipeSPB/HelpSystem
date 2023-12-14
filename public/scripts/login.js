const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn-login");

btn.addEventListener("click", async () => {
  const email = emailInput.value;
  const password = passwordInput.value;

  await axios.post("http://localhost:3333/login", {
      email: email,
      password: password
    }).catch((error)=>{
      alert(error.response.data.message)
    })
    .then((response) => {
       alert(response.data.message)
       localStorage.setItem('token', response.data.token)
       console.log(localStorage.getItem('token'))
       window.location.assign("http://localhost:3333/forum")
      }
    )});