//const mail = prompt ('Ingrese su Mail Para recibir un Cupon de Descuento');
//alert("FELICITACIONES! Su Cupon de descuento es: xYz123 ")


//function gen_table(){
//    document.getElementById("tab").innerHTML="";
//    let n=Number(document.getElementById("capital").value);
//    let n2=Number(document.getElementById("cuota").value);
//    let n3=Number(document.getElementById("interes").value);
//    if(n>0){   
//        for(i=1;i<=n2;i++){
//            ca=n/n2;
//            d1=ca.toFixed(2);
//            i2=((n*n3)/100)/n2;
//            d2=i2.toFixed(2);
//            r=ca+i2;
//            d3=r.toFixed(2);
//            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
//                    `<tr>
//                        <td> ${i}</td>
//                        <td> ${d1}</td>
//                        <td> ${d2}</td>
//                        <td> ${d3}</td>
//                    </tr>
//        }
//        n1=n.toFixed(2);
//        t_i=i2*n2;
//        d4=t_i.toFixed(2);
//        t_p=r*n2;
//        d5=t_p.toFixed(2);
//        document.getElementById("t1").innerHTML=n1;
//        document.getElementById("t2").innerHTML=d4;
//        document.getElementById("t3").innerHTML=d5;  
//    }else{
//        alert("Falta ingresar un Número");
//    }
//}


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