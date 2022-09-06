const divProductos = document.getElementById("divProductos")
const botonProductos = document.getElementById("botonProductos")

const llamarProductos = async () => {
    const response = await fetch('../json/productos.json')
    const productos = await response.json()
    return productos
}

function mostrarProductos(arrayProductos) {
    arrayProductos.forEach((producto, indice) => {
        divProductos.innerHTML += `
            <div class="card bg-warning m-5" id="producto${indice}" style="width: 18rem;">
                <img src="../img/${producto.img}" class="card-img-top" alt="hamburguer">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text fw-bold">$${producto.precio}.</p>
                    <a href="#" class="btn btn-success">Aceptar</a>
                </div>
            </div>
        `
    });
}

botonProductos.addEventListener('click', () => {
    llamarProductos().then(productos => {
        mostrarProductos(productos)
    })
})