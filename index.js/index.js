//const mail = prompt ('Ingrese su Mail Para recibir un Cupon de Descuento');
//alert("FELICITACIONES! Su Cupon de descuento es: xYz123 ");


class stock{
    constructor(id, tela, ancho, color, precio){
        //propiedades o atributos de nuestra clase
        this.id = id,
        this.tela = tela,
        this.ancho = ancho,
        this.color = color,
        this.precio = precio

    }
    mostrarDatos(){
        console.log(`La tela es ${this.tela} su tela es ${this.color} y vale ${this.precio}.`)
    }
    
}


const tela1 = new stock(1,"Lienzo, ",1.50, "Natural", 450)

const tela2 = new stock(2,"Gabardina, ", 1.50, "Natural", 900)

const tela3 = new stock(3,"Panama, ", 3.00, "Natural", 1600)

const tela4 = new stock(4,"Blackout, ", 1.50, "Blanco", 1200)

const tela5 = new stock(5,"Arpillera, ", 1.40, "Marron", 750)

const tela6 = new stock(6,"PLastico Protector, ", 1.50, "Transparente", 1500)


const Deposito = [tela1,tela2,tela3,tela4,tela5,tela6]

//FUNCIONES

function nuevaTela(){
    let telaIngresado = prompt("Ingrese el tela")
    let anchoIngresado = parseInt(prompt("Ingrese el ancho"))
    let colorIngresado = prompt("Ingrese el color")
    let precioIngresado = parseInt(prompt("Ingrese el precio"))


    let telaCreado = new stock(Deposito.length+1,telaIngresado, anchoIngresado, colorIngresado, precioIngresado)
    console.log(telaCreado)


    Deposito.push(telaCreado)
}
//mostrar stock

function mostrarDeposito(){
    alert(`Podrá ver nuestro Stock en la consola:`)
    for(let tela of Deposito){
        tela.mostrarDatos()
    }
}

function ordenarPorPrecio(){
    let opcion = prompt(`Ingrese MAYOR para ordenar de mayor a menor
                        Ingrese MENOR para ordenar de menor a mayor
    `)
    if(opcion.toUpperCase() == "MAYOR"){
        console.log(Deposito.sort((a,b)=> (b.precio - a.precio)))
    }
    else if(opcion.toUpperCase() == "MENOR"){
        console.log(Deposito.sort((a,b)=> (a.precio - b.precio)))
        
    }
}
function buscarPorcolor(){
        let buscado = prompt("Ingrese el color del tela que desea buscar")
        let busqueda = Deposito.find((el)=>el.color.toLowerCase() == buscado.toLowerCase())
        if(busqueda == undefined){
            console.log("No disponemos de ese color")
        }else{
            console.log(`Tenemos el color ${busqueda.color} de ${busqueda.tela}`)
        }
        
}
function buscarMismaTela(){
    let telaBuscado = prompt("Ingrese tela a buscar")
    let busqueda = Deposito.filter((tela)=>tela.tela.toLowerCase() == telaBuscado.toLowerCase() )
    if (busqueda == ""){
        console.log("No disponemos de stock de la tela que busca")
    }else{
        console.log(busqueda)
    }
}


function preguntarOpcion(){
    let opcion = parseInt(prompt(`Ingrese el número de la opción que desea realizar:
                        1 - Ver stock
                        2 - Agregar una tela a nuestro stock
                        3 - Encontrar por color:
                        4 - Buscar stock de una misma tela:
                        5 - Ordenar stock por precios:
                        0 - Para salir
                        `))
    menu(opcion)
}

function menu(opcionSeleccionada){
    switch(opcionSeleccionada){
        case 0:
            salir = true
            alert(`Gracias por visitarnos, Que tenga buen dia!`)
        break    
        case 1:
            mostrarDeposito()
        break 
        case 2: 
            nuevaTela()
        break
        case 3: 
            buscarPorcolor()
        break
        case 4: 
            buscarMismaTela()
        break 
        case 5:
            ordenarPorPrecio()
        break
        default: 
    alert(`Ingrese una opción correcta`)
    }
}

let salir 
while(salir != true){
    preguntarOpcion()
    
}


const clickComprar = () =>{
    console.log("Se añadio al carrito!");
};

document.querySelectorAll("#botonComprar").forEach(compra => {
    compra.addEventListener("click", clickComprar);
})
//const compra = document.getElementById("botonComprar");

//compra.addEventListener("click", clickComprar);

const form=document.querySelector("#formulario");
const enviarFormulario=(event)=>{
event.preventDefault();

console.log(
    event.target.email,
    event.target.password
);
};

form.addEventListener("submit",enviarFormulario);

let darkMode
console.log (localStorage.getItem("darkMode"))
if(localStorage.getItem("darkMode")){
    darkMode = localStorage.getItem("darkMode")
}else{
    localStorage.setItem("darkMode", "light")
}
console.log (darkMode)
if(darkMode =="dark"){
    document.body.classList.add(darkMode)
}
//Dark y Light Mode
let btnDarkMode = document.getElementById("botonDarkMode")
let btnLightMode = document.getElementById("botonLightMode")

btnDarkMode.addEventListener("click",() =>{
        document.body.style.backgroundColor= "#191a1a"
        document.body.style.color= "antiquewhite"
        //document.body.classList.add= "antiquewhite"
        localStorage.setItem("darkMode", "dark")
})
btnLightMode.addEventListener("click",() =>{
    document.body.style.backgroundColor= "antiquewhite"
    document.body.style.color= "#191a1a"
    //document.body.classList.add= "black"
    localStorage.setItem("darkMode", "light")
})

let eliminarModo=document.getElementById
("eliminarMode")
eliminarModo.addEventListener("click",()=>{
    localStorage.removeItem("darkMode")
})

//localStorage.setItem("producto", tela1)
//localStorage.setItem("misTelas", Deposito)

//let tela1JSON = JSON.stringify(tela1)
//console.log(tela1JSON)
//localStorage.setItem("productoJSON", tela1JSON)

let arrayJSON = JSON.stringify(Deposito)
localStorage.setItem("arrayJSON", arrayJSON)


let capturaTela1=localStorage.getItem("productoJSON")
console.log(tela1)
console.log(capturaTela1)
let tela1parseado= JSON.parse(capturaTela1)
console.log(tela1parseado)

let arrayParseado=JSON.parse(localStorage.getItem
    ("arrayJSON"))
    console.log(arrayParseado)