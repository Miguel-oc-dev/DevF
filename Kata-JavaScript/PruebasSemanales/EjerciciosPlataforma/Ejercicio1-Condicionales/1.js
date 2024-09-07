// 1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let userResponse = prompt("¿Eres bellisim@?").toUpperCase;

if(userResponse == "SI"){
    console.log("Ciertamente...");   
} else if(userResponse == "NO"){
    console.log("No te creo...");
} else {
    console.log("Respuesta no valida...");
}