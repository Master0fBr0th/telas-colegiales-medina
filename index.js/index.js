const mail = prompt ('Ingrese su Mail Para recibir un Cupon de Descuento');
alert("FELICITACIONES! Su Cupon de descuento es: xYz123 ");


const clickComprar = () =>{
    console.log("Se añadio al carrito!");
};

const compra = document.getElementById("botonComprar");

compra.addEventListener("click", clickComprar);

const form=document.querySelector("#formulario");
const enviarFormulario=(event)=>{
event.preventDefault();

console.log(
    event.target.email,
    event.target.password
);
};

form.addEventListener("submit",enviarFormulario);

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


//function ValidateEmail(inputText)
//{
//let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//if(inputText.value.match(mailformat))//
//{
//alert("Mail Valido!");
//document.form1.text1.focus();
//return true;
//}
//else
//{
//alert("Ingrese un mail valido!");
//document.form1.text1.focus();
//return false;
//}
//}