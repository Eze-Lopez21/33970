//Definicion de constantes
const divProductos = document.getElementById("divProductos")
const botonProductos = document.getElementById("botonProductos")
const botonComprar = document.getElementsByClassName("botonComprar")
const botonCarrito = document.getElementById("botonCarrito")

//Asincronismo para usarlo luego
const llamarProductos = async () => {
    const response = await fetch('../json/productos.json')
    const productos = await response.json()
    return productos
}

//Generar la funcion para mostrar los productos luego
function mostrarProductos(arrayProductos) {
    // Vaciar el div, para que se genere una sola vez.
    divProductos.innerHTML = ""

    arrayProductos.forEach((producto, indice) => {
        divProductos.innerHTML += `
            <div class="card bg-warning m-5" id="producto${indice}" style="width: 18rem;">
                <img src="../img/${producto.img}" class="card-img-top" alt="hamburguer">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text fw-bold">$${producto.precio}.</p>
                    <a href="#" class="btn btn-success botonComprar">Aceptar</a>
                </div>
            </div>
        `
        // Notificacion de producto agregado al carrito con Toastify
        for(let i = 0; i < botonComprar.length; i++) {
            botonComprar[i].addEventListener('click', () => {
                Toastify({
                text: "Agregado al carrito",
                duration: 3000,
                close: true,
                gravity: "top",
                position: "left",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #0ca17f, #2bab47)",
                },
                //Funcion para abrir el carrito desde la notificacion
                onClick: function(){
                    mostrarCarrito()
                    }
                }).showToast();
            })
        }
    });
}

//Mostrar los productos llamando a la funcion previamente hecha
botonProductos.addEventListener('click', () => {
    llamarProductos().then(productos => {
        mostrarProductos(productos)
    })
})

//Alerta del carrito con SweetAlert2
function mostrarCarrito() {
    Swal.fire({
        title: 'Carrito',
        background: 'linear-gradient(#ffa500, #ABEBC6)',
        confirmButtonColor: '#198754',
        showDenyButton: true,
        showCancelButton: true,
        html: '<p>¿Que desea hacer con su pedido?</p>',
        confirmButtonText: 'Finalizar Compra',
        denyButtonText: `Cancelar Compra`,
        cancelButtonText: 'Seguir Comprando'
    }).then((result) => {
        //Finaliza el pedido de 2 formas
        if (result.isConfirmed) {   
            Swal.fire('Compra Finalizada', 'En breve se le enviaran los productos solicitados.', 'success')
        } else if (result.isDenied) {
            Swal.fire('Su pedido fue cancelado', '', 'info')
        }
    })
}

//Entrar al carrito desde el boton
botonCarrito.addEventListener('click', () => {
    mostrarCarrito()
})