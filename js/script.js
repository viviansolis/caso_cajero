var constraseña_real = "12345678";

class Usuario{
    constructor(constraseña){
        this.constraseña = constraseña;
    }
    constraseña(){
        return this.constraseña;
    }
}

function ok(){
    var user = new Usuario(document.getElementById("caja-password").value)
    if(user.constraseña == constraseña_real){
        document.getElementById("contraincorrecta").style.display="block";
        document.getElementById("contraincorrecta").innerHTML="*LOGEO CORRECTO*";
        
        logeado = true;
        if(logeado){
           function ok1(){

            window.location = "menu.html"
           }
           setTimeout(ok1,2200); 

        }else{
            document.getElementById("contraincorrecta").style.display="block";
            var elemento = document.getElementById("caja-password");
            elemento.value = "";
        }
    }else{
        document.getElementById("contraincorrecta").style.display="block";
        var elemento = document.getElementById("caja-password");
        elemento.value = ""; 
    }
}
function clarin(){
    var elemento = document.getElementById("caja-password");
    elemento.value =  elemento.value.substring(0, elemento.value.length - 1);
    
}
function confirmar(){
    let saldo = 5000;
      var elemento = document.getElementById("caja-password").value;
      if(elemento == ""){
          document.getElementById("valid_mul").style.display="block";
          document.getElementById("valid_mul").innerHTML="*INGRESE UN VALOR*";
      }else{
        if(elemento > saldo){
          document.getElementById("valid_mul").style.display="block";
        document.getElementById("valid_mul").innerHTML="SALDO INSUFICIENTE"
      }else{
        if(elemento%10 == 0){
          document.getElementById("valid_mul").style.display="block";
          document.getElementById("valid_mul").innerHTML="PROCESANDO TRANSACCION "
          function graciasfinal(){
              window.location = "transaccion.html"
          }
          setTimeout(graciasfinal,2200);
        }else{
          document.getElementById("valid_mul").style.display="block";
          document.getElementById("valid_mul").innerHTML="NO ES MULTIPLO DE 10 "
        }
      }
    }
  }
function boton62(){
    window.location = "otrascantidades.html"
}
function retsoles(){
    window.location = "retirosoles.html"
}
function confirmar(){
    var elemento = document.getElementById("caja-password").value;
    if(elemento == ""){
            alert("Ingrese un monto");
    }else{
        if(elemento%10 == 0){
        window.location = "transaccion.html";

        }else{
            alert("Solo múltiplos de 10");
        }
    }
}
function gracias1(){
    window.location = "gracias.html"
}
function retiro(){
    window.location = "retiro.html"
}

function retmenu(){
    window.location = "menu.html"
}
function retirosoles(){
    window.location = "retirosoles.html"
}
function retretiro(){
    window.location = "retiro.html"
}
document.getElementById("cancel").addEventListener("click",cancel);

function cancel(){
    var elemento = document.getElementById("caja-password");
    elemento.value = "";  
}

document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n11").addEventListener("click",n11);
document.getElementById("n12").addEventListener("click",n12);

function n1(){ 
let sumado = document.getElementById("n1").innerHTML;
var elemento = document.getElementById("caja-password");
var value = elemento.value;
elemento.value = value + sumado;
}
function n2(){
    let sumado = document.getElementById("n2").innerHTML;
    var elemento = document.getElementById("caja-password");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
 function n3(){
    let sumado = document.getElementById("n3").innerHTML;
    var elemento = document.getElementById("caja-password");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
 function n4(){
    let sumado = document.getElementById("n4").innerHTML;
    var elemento = document.getElementById("caja-password");
    var value = elemento.value;
    elemento.value = value + sumado;
 }
 function n5(){
    let sumado = document.getElementById("n5").innerHTML;
    var elemento = document.getElementById("caja-password");
    var value = elemento.value;
    elemento.value = value + sumado;
   }
 function n6(){
   let sumado = document.getElementById("n6").innerHTML;
   var elemento = document.getElementById("caja-password");
   var value = elemento.value;
    elemento.value = value + sumado;
   }
function n7(){
   let sumado = document.getElementById("n7").innerHTML;
   var elemento = document.getElementById("caja-password");
   var value = elemento.value;
   elemento.value = value + sumado;
   }
function n8(){
   let sumado = document.getElementById("n8").innerHTML;
   var elemento = document.getElementById("caja-password");
   var value = elemento.value;
   elemento.value = value + sumado;
   }
function n9(){
   let sumado = document.getElementById("n9").innerHTML;
   var elemento = document.getElementById("caja-password");
   var value = elemento.value;
   elemento.value = value + sumado;
   }
function n11(){ 
   let sumado = document.getElementById("n11").innerHTML;
   var elemento = document.getElementById("caja-password");
   var value = elemento.value;
   elemento.value = value + sumado;
   }
function n12(){ 
   let sumado = document.getElementById("n12").innerHTML;
   var elemento = document.getElementById("caja-password");
   var value = elemento.value;
   elemento.value = value + sumado;
   }