class User {
    constructor(username, number, email, password) {
        this.username = username
        this.number = number
        this.email = email
        this.password = password
    }
}

const idForm = document.getElementById("idForm")
const botonUsers = document.getElementById("botonUsers")
const divUsers = document.getElementById("divUsers")

const users = []

idForm.addEventListener('submit', (event) => {
    event.preventDefault()
    const username = document.getElementById("username").value
    const number = document.getElementById("number").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const user = new User(username, number, email, password)

    users.push(user)

    idForm.reset()
    console.log(users)
})


botonUsers.addEventListener('click', () => {
    divUsers.innerHTML = ""
    users.forEach((user, indice) => {
        divUsers.innerHTML += `
            <div class="card" id="user${indice}" style="width: 18rem; margin:3px;">
                <img src="https://static.vecteezy.com/system/resources/previews/005/276/776/non_2x/logo-icon-person-on-white-background-free-vector.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${user.username}</h5>
                <p class="card-text">${user.number} años</p>
                <p class="card-text">${user.email}</p>
                </div>
            </div>
        `
    })
})