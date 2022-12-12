const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');


// Expresiones regulares
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // hasta 40 caracteres y no incluye simbolos
	dni: /^\d{7,8}$/, // 7 a 8 numeros.
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// objetos
const items = {
    nombre : false,
    dni : false,
    telefono : false,
}


const validarForm = (evento) => {
    switch (evento.target.name){
        case "nombre":
           valida(expresiones.nombre, evento.target, 'nombre')

        break;

        case "dni":
            valida(expresiones.dni, evento.target, 'dni')
        break;

        case "telefono":
            valida(expresiones.telefono, evento.target, 'telefono')
        break;
    }
}

const valida = (expresion, input, camp) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${camp}`).classList.remove('formulario__grupo-incorrecto'); 
        document.getElementById(`grupo__${camp}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${camp} i`).classList.remove('fa-times-circle') 
        document.querySelector(`#grupo__${camp} i`).classList.add('fa-check-circle') 
        document.querySelector(`#grupo__${camp} .formulario__input-error`).classList.remove('formulario__input-error-activo')
        items[camp]=true;
    }else{
        document.getElementById(`grupo__${camp}`).classList.add('formulario__grupo-incorrecto'); 
        document.getElementById(`grupo__${camp}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${camp} i`).classList.add('fa-times-circle'); 
        document.querySelector(`#grupo__${camp} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${camp} .formulario__input-error`).classList.add('formulario__input-error-activo')
        items[camp]=false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarForm) // cuando levanto la tecla me ejecuta esta funcion
    input.addEventListener('blur', validarForm) 
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const  terminos = document.getElementById('terminos');
    if(items.nombre && items.dni  && items.telefono && terminos.checked ){
        document.location.href="./inicio.html"

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(()=>{// booramoos toodoss  mensaajess de exito
            document.getElementById('formulario__mensaje-exito').classList.remove
            ('formulario__mensaje-exito-activo')
        }, 3000);
        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{ // borraamos icconos dde exito
            icono.classList.remove('formulario__grupo-correcto')

        })

    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo')
        setTimeout(()=>{// booramoos toodoss  mensaajess de exito
            document.getElementById('formulario__mensaje').classList.remove
            ('formulario__mensaje-activo')
        }, 3000);
    }
    
});