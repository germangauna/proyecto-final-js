const unaPersona = Number(3500)

let vacationCalc = document.getElementById('vacationCalc')

vacationCalc.addEventListener('submit', calcGastos)

function calcGastos(e) {

    e.preventDefault();

    let nombre = document.getElementById('nombre').value,
        dni = document.getElementById('dni').value,
        pasajeros = document.getElementById('pasajeros').value,
        categoria = document.getElementById('categoria').value,
        noches = document.getElementById('noches').value;

    let costoEstadia = (parseInt(unaPersona) * parseInt(pasajeros)) * parseInt(noches);

    UI(pasajeros, noches, costoEstadia)

}

function UI(pasajeros, noches, costoEstadia) {
    let result = document.getElementById('result')
    let dataPrint = document.createElement('div')
    dataPrint.innerHTML = `
                <div class="container-data row">
                    <div class="col s4">
                        <h6>${pasajeros}</h6>
                    </div>
                    <div class="col s4">
                        <h6>${noches}</h6>
                    </div>
                    <div class="col s4">
                    <h6>${costoEstadia}</h6>
                </div>
                </div>
        `
    result.appendChild(dataPrint)


}

// LOCAL STORAGE

let main = function () {
    capturar_boton();
}

let capturar_boton = function () {
    document.querySelector('#boton').setAttribute("onclick", "dataRead()");
}

let dataRead = function () {
    console.log("Leyendo datos")
    console.log(
        document.querySelector("#nombre").value,
        document.querySelector("#dni").value,
        document.querySelector("#telefono").value,
        document.querySelector("#email").value,
    );
    let usuario = {
        // CLAVE : VALOR
        nombre: document.querySelector("#nombre").value,
        dni: document.querySelector("#dni").value,
        telefono: document.querySelector("#telefono").value,
        email: document.querySelector("#email").value
    };
    console.log(usuario);
    // GUARDADO LOCAL STORAGE
    guardar_localStorage(usuario)
}

let guardar_localStorage = function (usuario) {
    localStorage.setItem("infoUsuario", JSON.stringify(usuario))
}

let read_localStorage = function () {
    let miInfo = localStorage.getItem("infoUsuario");
    let usuario = JSON.parse(miInfo);
    console.log(usuario);
    document.querySelector("#nombre").value = usuario.nombre;
    document.querySelector("#dni").value = usuario.dni;
    document.querySelector("#telefono").value = usuario.telefono;
    document.querySelector("#email").value = usuario.email
}

let reset = function(){
    document.querySelector("#nombre").value = "";
    document.querySelector("#dni").value = "";
    document.querySelector("#telefono").value = "";
    document.querySelector("#email").value = "";
}
main();