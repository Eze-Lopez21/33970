class Consulta {
    constructor(nombre, apellido, correo, direccion,comentarios) {
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.direccion = direccion
        this.comentarios = comentarios
    }
}

let consultas = []

if(localStorage.getItem('consultas')) {
    consultas =  JSON.parse(localStorage.getItem('consultas'))
} else {
    localStorage.setItem('consultas', JSON.stringify(consultas))
}

const form = document.getElementById("main__form")
const botonConsultas = document.getElementById("boton__consultas")
const zonaConsultas = document.getElementById("zona__consultas")
const mainButton = document.getElementsByClassName("main__button")

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target)

    const consulta = new Consulta(datForm.get("nombre"), datForm.get("apellido"), datForm.get("correo"), datForm.get("direccion"), datForm.get("comentarios"))
    
    consultas.push(consulta)

    localStorage.setItem('consultas', JSON.stringify(consultas))

    form.reset()
})

boton__consultas.addEventListener('click', () => {
    const tarStorage = JSON.parse(localStorage.getItem('consultas'))

    zona__consultas.innerHTML = ""

    tarStorage.forEach((consulta, indice) => {
        zona__consultas.innerHTML += `
            <div class="card bg-warning m-5" id="consulta${indice}" style="width: 20rem;">
                <div class="card-header">
                    <h2>${consulta.nombre} ${consulta.apellido}<h2>
                </div>
                <div class="card-body">
                    <h5 class="card-title fw-bold"><i class="bi bi-envelope"></i> ${consulta.correo}</h5>
                    <p class="card-text bold"><i class="bi bi-house-door"></i> ${consulta.direccion}</p>
                    <p class="card-text"><i class="bi bi-pencil-square"></i> ${consulta.comentarios}</p>
                    <button class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        `
    })

    tarStorage.forEach((consulta, indice) => {
        const infoConsulta = document.getElementById(`consulta${indice}`)

        infoConsulta.children[1].children[3].addEventListener('click', () => {
            infoConsulta.remove() //DOM
            consultas.splice(indice, 1) //Array
            localStorage.setItem('consultas', JSON.stringify(consultas)) //Local storage
            console.log(`${consulta.nombre} Eliminada`)
        })
    })
})

//Notificacion toastify
for(let i = 0; i < mainButton.length; i++) {
    mainButton[i].addEventListener('click', () => {
        Toastify({
        text: "Consulta guardada",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #0ca17f, #2bab47)",
        },
        }).showToast();
    })
}