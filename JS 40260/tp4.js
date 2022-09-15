const producto = [
    { nombre: "pc gamer 1", precioIn: 200000 },
    { nombre: "pc gamer 2", precioIn: 210000 },
    { nombre: "pc gamer 3", precioIn: 220000 },
]

iva = (n) => n * 21 / 100;

let cart = []

let seleccion = prompt("¿Desea comprar una PC gamer?")

while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingrese si o no")
    seleccion = prompt("Desea comprar una PC gamer si o no?")
}

if (seleccion == "si") {
    alert ("a continuacion nuestra lista de productos")
    let todosLosProductos = producto.map( (producto) =>  
    producto.nombre + ": " + "$" + producto.precioIn + " IVA: " + iva(producto.precioIn) + " Precio Final: " + (iva(producto.precioIn) + producto.precioIn) + " ");

    alert (todosLosProductos.join("// "))
} else if (seleccion == "no") {
    alert ("Gracias por venir, hasta pronto!!")
}

while(seleccion != "no") {
    let productoComprar = prompt ("ingrese nombre de producto para ingresarlo al carrito");
    let precio = 0

    if(productoComprar == "pc gamer 1" || productoComprar == "pc gamer 2" || productoComprar == "pc gamer 3") {
        switch (productoComprar) {

            case "pc gamer 1":
            precio = iva (200000) + 200000
            break;
        
       
            case "pc gamer 2":
            precio = iva (210000) + 210000
            break;
            
       
            case "pc gamer 3":
            precio = iva (220000) + 220000
            break;
        }
    let unidades = parseInt(prompt("¿cuantas unidades quiere llevar?"))
    
    cart.push({productoComprar, unidades, precio});
    console.log(cart)
    } else {
        alert ("No tenemos ese producto")
    }
    
    seleccion = prompt ("¿Desea seguir comprando?")
    
    while(seleccion === "no") {
        alert("Gracias por la compra!! Hasta pronto")
        cart.forEach((cartFinal)=>{
            alert (`Producto: ${cartFinal.productoComprar}, Unidades: ${cartFinal.unidades}, total a pagar por producto $${cartFinal.unidades * cartFinal.precio}`)
        })
    break;
    }
}
