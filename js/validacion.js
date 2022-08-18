function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

function showAlertError2() {
    document.getElementById("alert-danger2").classList.add("show");
}

/* Pauta grupal 1
Incluir las validaciones que se listan a continuación:

- Ningún campo puede estar vacío.
- La contraseña debe tener al menos 6 caracteres.
- Los datos ingresados en "Contraseña" y "Repetir contraseña" deben ser iguales.
- Se debe haber marcado el checkbox "Acepto los términos y condiciones del servicio"

En caso de que los datos ingresados por el usuario cumplan con los criterios establecidos, se deberá llamar a la función showAlertSuccess(), 
y en caso contrario a la función showAlertError() */


const registrarse = document.getElementById("regBtn");
registrarse.addEventListener("click",comprobadorRegistros);

function comprobadorRegistros(){
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let email = document.getElementById("email").value
    let contr = document.getElementById("password1").value
    let contrRepetir = document.getElementById("password2").value
    let boxcheck = document.getElementById("terminos")
    let comprobador = true;
    let todosLosDatos = false;

    if(nombre != null || apellido != null || email != null || contr != null || contrRepetir != null ){
        todosLosDatos = true;
    }

    if(email.indexOf("@") != -1 && comprobador == true &&  todosLosDatos == true ){
    }else{ showAlertError2()}


    if(contr.length >= 6 && comprobador == true &&  todosLosDatos == true){
    }else{ comprobador = false;}

    if(contr == contrRepetir && comprobador == true &&  todosLosDatos == true ){

    }else{ comprobador = false;}

    if(boxcheck.checked && comprobador == true &&  todosLosDatos == true ){

    }else{ comprobador = false;}



    if(comprobador == true){
        showAlertSuccess()
    }else{showAlertError()}











}