const convertirD = (num1, num2) => num1 / num2

const convertirP = (num1, num2) => num1 * num2


function conversiones(operacion, num1, num2) {
    switch(operacion) {
        case "p":
            console.log(convertirD(num1, num2))
            break
        case "d":
            console.log(convertirP(num1, num2))
            break
        default:
            console.log("Opcion no valida")
    }
}
let respuesta
do {
    let num1, num2, operacion
    do {
        operacion = prompt("Ingrese la moneda a convertir (d = dolares, p = pesos argentinos)").toLowerCase()
        num1 = prompt("Ingrese su cantidad a convertir")
        num2 = 130.62
    
        if(isNaN(num1)) {
            console.log("El numero ingresado no es valido")
        }
    
    } while((isNaN(num1)))
    
    conversiones(operacion, num1 ,num2)

    do {
        respuesta = prompt("¿Desea realizar otra conversion? (si, no)").toLowerCase()
    } while(respuesta != "si" && respuesta != "no")

}while(respuesta != "no")