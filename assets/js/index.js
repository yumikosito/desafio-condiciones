const emet=document.getElementById("Emet-img")

function borde(){
  if (emet.style.border===""){
    emet.style.border="2px solid red"
  } else {
    emet.style.border =""
  }
}

function verificar(){
  const graha1=Number(document.querySelector("#Graha1").value)
  const graha2=Number(document.querySelector("#Graha2").value)
  const graha3=Number(document.querySelector("#Graha3").value)
  let texto=document.querySelector("#textEscondido")
  let total=graha1+graha2+graha3

    if (total>10){
      texto.innerHTML="Llevas demasiados stickers :("

    } else{
      texto.innerHTML="Llevas "+total+" stickers"
    }
}

function ingresar(){
  const pass_1= document.querySelector("#Pass1").value
  const pass_2= document.querySelector("#Pass2").value
  const pass_3= document.querySelector("#Pass3").value
  let text_pass=document.querySelector("#passEscondido")
  let contrasena = pass_1+pass_2+pass_3
  let imagenMapa=document.getElementById("imagemap")
  
    if (contrasena==="911"){
      text_pass.innerHTML="Password 1 correcto"
      imagenMapa.src="./assets/img/Mapa.png";

    } else if (contrasena==="714"){
      text_pass.innerHTML="Password 2 correcto"
      imagenMapa.src="./assets/img/Mapa2.png";
    } else {
      text_pass.innerHTML="Password incorrecto. No obtienes ningun mapa :("
      imagenMapa.src="";
    }
}