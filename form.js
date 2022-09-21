//Definir elementos para el form
class Consulta {
    constructor(nombre, apellido, correo, direccion,comentarios) {
        this.nombre = nombre
        this.apellido = apellido
        this.correo = correo
        this.direccion = direccion
        this.comentarios = comentarios
    }
}

//Creo una variable para guardar las consultas hechas
let consultas = []
//Pasar de JSON a objeto, y de objeto a JSON
if(localStorage.getItem('consultas')) {
    consultas =  JSON.parse(localStorage.getItem('consultas'))
} else {
    localStorage.setItem('consultas', JSON.stringify(consultas))
}

//Definicion de constantes
const mainForm = document.getElementById("mainForm")
const botonConsultas = document.getElementById("botonConsultas")
const zonaConsultas = document.getElementById("zonaConsultas")
const mainButton = document.getElementsByClassName("mainButton")

//Crear una consulta y resetearla una vez enviada
mainForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const datForm = new FormData(e.target)

    const consulta = new Consulta(datForm.get("nombre"), datForm.get("apellido"), datForm.get("correo"), datForm.get("direccion"), datForm.get("comentarios"))
    
    consultas.push(consulta)

    localStorage.setItem('consultas', JSON.stringify(consultas))

    mainForm.reset()
})

//Mostrar las consultas realizadas
botonConsultas.addEventListener('click', () => {
    const conStorage = JSON.parse(localStorage.getItem('consultas'))
    // Vaciar el div, para que se genere una sola vez.
    zonaConsultas.innerHTML = ""

    conStorage.forEach((consulta, indice) => {
        zonaConsultas.innerHTML += `
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

    conStorage.forEach((consulta, indice) => {
        const infoConsulta = document.getElementById(`consulta${indice}`)
//Eliminar las consultas del DOM y del Local Storage
        infoConsulta.children[1].children[3].addEventListener('click', () => {
            infoConsulta.remove() //Eliminada del DOM
            consultas.splice(indice, 1) //Array
            localStorage.setItem('consultas', JSON.stringify(consultas)) //Eliminada del Local storage
            console.log(`${consulta.nombre} Eliminada`)
        })
    })
})

//Notificacion toastify para las consultas
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