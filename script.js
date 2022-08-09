const productosAsignados = [
    {
        numero: '1',
        nombre: 'Combo #1',
        precio: 100,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        numero: '2',
        nombre: 'Combo #2',
        precio: 200,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        numero: '3',
        nombre: 'Combo #3',
        precio: 300,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        numero: '4',
        nombre: 'Combo #4',
        precio: 400,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        numero: '5',
        nombre: 'Combo #5',
        precio: 500,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        numero: '6',
        nombre: 'Combo #6',
        precio: 600,
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

// Clase
class Producto{
    constructor(numero, nombre, precio, descripcion){
        this.numero = numero;
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }
    obtenerInfo(){
        return `${this.numero} : ${this.nombre} ( $${this.precio} )`;
    }
    obtenerAviso(){
        return `El ${this.nombre} tiene un valor de $${this.precio}`;
    }
}
// Variable
const carrito = [];
// Funciones
const obtenerInfoProductos = (productosArray) => {
    return productosArray.map( (elemento)=>  elemento.obtenerInfo() ).join('\n');
}
const agregarAlCarritoPorNumero = (productos) => {
    const infoProductos = obtenerInfoProductos(productos);
    const numero = prompt('Ingrese el numero del combo que desea agregar al carrito:\n' + infoProductos);
    const producto = productos.find((producto) => producto.numero === numero);
    if (!producto) return alert('El numero que ingresó, no corresponde a ningún combo.');
    carrito.push(producto);
    alert('Producto agregado al carrito');
}
const imprimirCarrito = (carritoDeProductos) => {
    carritoDeProductos.forEach((producto) => {
        console.log(producto.obtenerAviso());
    });
}
const obtenerTotal = (productosArray) => {
    let total = 0;
    productosArray.forEach((producto) => {
        total += producto.precio;
    });
    return total;
}
// Ejecución
const productos = productosAsignados.map(producto => new Producto(
    producto.numero,
    producto.nombre,
    producto.precio,
    producto.descripcion,
));

let confirmacion

// Bucle
do {
    agregarAlCarritoPorNumero(productos);
    confirmacion = prompt('¿Desea agregar otro combo? (si | no)').toLowerCase()
} while(confirmacion == 'si')

// Condicional
if (confirmacion == 'no') {
    alert('Abre la consola para ver el total de tu compra');
imprimirCarrito(carrito);
console.log('TOTAL: ' , obtenerTotal(carrito));
}
else if (confirmacion != 'no') {
    alert('Su respuesta no es valida. Intente nuevamente');
    imprimirCarrito(carrito);
    console.log('TOTAL: ' , obtenerTotal(carrito));
}