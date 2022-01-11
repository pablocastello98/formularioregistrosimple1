const nombre = document.getElementById("name");
const email = document.getElementById("email");
const pass = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
var usuarios = [];

form.addEventListener("submit", e=>{

    do {

        e.preventDefault();
        let warnings = "";
        let entrar = false;
        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        parrafo.innerHTML = "";

        var obj ={
            usuario: '',
            mail: '',
            contraseña: ''
        };

        if(nombre.value.length < 3){
            warnings += 'El nombre no es válido <br>';
            entrar = true;
        };
        if(!regexEmail.test(email.value)){
            warnings += 'El email no es válido <br>';
            entrar = true;
        };
        if(pass.value.length < 8){
            warnings += 'La contraseña no es válida <br>';
            entrar = true;
        };
    
        if(entrar){
            parrafo.innerHTML = warnings;
        }else{
            obj.usuario = nombre.value;
            obj.mail = email.value;
            obj.contraseña = pass.value;
            usuarios.push(obj);
            parrafo.innerHTML = "Enviado";
        };
    } while (obj.usuario != 'fin');

    parrafo.innerHTML = 'Carga finalizada';
});

usuarios.pop();
console.log(usuarios);