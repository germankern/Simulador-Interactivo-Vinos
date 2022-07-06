//  Nota:
//  Mi simulador interactivo tiene 3 opciones, la primera para comprar (descuenta es stock por la cantidad que deseas comprar),
//  la segunda opción repone stock y la tercera finaliza el programa.

let stock = 200;
let opcion;

// Funciones
const registrarVenta = (cantidad) => {
    if (stock > cantidad) {
        stock = stock - cantidad;
        console.log(`Gracias por su compra de ${cantidad}vinos!`);
        console.log(`El stock ahora es de ${stock} vinos.`)
    } else{
        console.log(`No contamos con el stock sufiente, nos quedan ${stock} vinos disponibles.`);
    }
}

const reponer = (cantidad) => {
    stock = stock + cantidad;
    console.log(`El nuevo stock es de ${stock} vinos`);
}

// Menu Interactivo
do {
    opcion = Number(prompt('Que deseas hacer?\n\n1 - Comprar Vinos\n2 - Registrar Vinos\n3 - Salir'));
    let cantidad;

    switch (opcion) {
        case 1:
            cantidad = Number(prompt('¿Cuantos vinos quieres comprar?'));
            registrarVenta(cantidad);
            break;
        case 2:
            cantidad = Number(prompt('Ingresar cantidad de vinos ingresados'));
            reponer(cantidad);
            break;
        case 3:
            alert('Gracias por visitar nuestra página');
            break;
        default:
            alert('La opción ingresada no es válida, vuelva a intentar.');
            break;
    }
} while(opcion !==3);