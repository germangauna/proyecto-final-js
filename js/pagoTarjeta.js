const tarjeta =document.querySelector('#tarjeta'),
      btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
      formulario = document.querySelector('#formulario-tarjeta'),
      numeroTarjeta = document.querySelector('#tarjeta .numero'),
      nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
      firma = document.querySelector('#tarjeta .firma p'),
      mesExpiracion =document.querySelector('#tarjeta .mes'),
      yearExpiracion=document.querySelector('#tarjeta .year'),
      ccv=document.querySelector('#tarjeta .ccv');
      

// MOSTRAR FRENTE TARJETA.
const mostrarFrente = () => {
    if(tarjeta.classList.contains('active')){
        tarjeta.classList.remove('active')
    }
}

// BTN ABRIR FORMULARIO
btnAbrirFormulario.addEventListener('click', () => {
    btnAbrirFormulario.classList.toggle('active');
    formulario.classList.toggle('active');
})

// ROTAR TARJETA
tarjeta.addEventListener('click', ()=>{
    tarjeta.classList.toggle('active');
});

// SELECTOR MES DINAMICO
for(let i = 1; i<=12; i++){
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}
// SELECT AÑO DINAMICO
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// INPUT NUM TARJETA
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
    //Elimina espacios en blanco
    .replace(/\s/g, '')
    // Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

    numeroTarjeta.textContent = valorInput;

    if(valorInput == ''){
        numeroTarjeta.textContent = '#### #### #### ####';
        logoMarca.innerHtml = '';

    }

    if(valorInput[0] == 4){
        logoMarca.innerHTML = '';
        const imagen = document.createElement('img');
        imagen.src = './multimedia/tarjeta/visa.png';
        logoMarca.appendChild(imagen);
    }else if (valorInput[0]==5 ){
        logoMarca.innerHTML= '';
        const imagen = document.createElement('img');
        imagen.src = './multimedia/tarjeta/mastercard.png';
        logoMarca.appendChild(imagen);
    }

    mostrarFrente();
})

// INPUT NOMBRE TARJETA

formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;

    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
    nombreTarjeta.textContent=valorInput;
    firma.textContent = valorInput;

    if(valorInput == ''){
        nombreTarjeta.textContent = 'Juan Sarasa';
    }
    mostrarFrente()
})

// SELECTOR MES
formulario.selectMes.addEventListener('change', (e)=>{
    mesExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente()
})

// SELECTOR AÑO
formulario.selectYear.addEventListener('change', (e)=>{
    yearExpiracion.textContent = e.target.value.slice(2);
    mostrarFrente()
})

// CCV
formulario.inputCCV.addEventListener('keyup', ()=>{
    if(!tarjeta.classList.contains('active')){
        tarjeta.classList.toggle('active');
    }
    formulario.inputCCV.value=formulario.inputCCV.value
    //ELIMINAMOS ESPACIOS
    .replace(/\s/g, '')
    // ELIMNAMOS LETRAS
    .replace(/\s/g, '')

    ccv.textContent=formulario.inputCCV.value;
})