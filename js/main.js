const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-navegacion')

menu.addEventListener('click', () => {
    menuNav.classList.toggle("spread")
})
window.addEventListener('click', o => {
    if (menuNav.classList.contains('spread')
        && o.target != menuNav && o.target != menu) {
        menuNav.classList.toggle("spread")
    }
})
// FIN MENU HAMBURGUESA

// GALERIA
const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const menu1 = document.querySelector('.menu')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', () => {
        aparecerImagen(imagen.getAttribute('src'))

    })
})

contenedorLight.addEventListener('click', (e) => {
    if (e.target !== imagenesLight) {
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImagen')
        menu1.style.opacity = '1'
    }
})
const aparecerImagen = (imagen) => {
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImagen')
    menu1.style.opacity = '0'
}
// FIN GALERIA

// CLIMA
const btn = document.querySelector('#btnclima')
btn.addEventListener('click', () => {
    const key = "0ca063b746578ffb14d9f9455bdb165a"
    let ciudad = document.querySelector('#ciudad').value
    ciudad = encodeURIComponent(ciudad)
    console.log(ciudad)

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${key}`
    console.log(url)

    if (ciudad != "") {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(clima => {
                console.log(clima)
                let temp = clima.main.temp
                let tempC = temp - 273.15
                let html = document.querySelector("#temperatura")
                html.innerHTML = tempC.toFixed(0)

                if (tempC < 12) {
                    html.className = "cold"
                } else {
                    html.className = "warm"
                }
            })
            .catch(err => console.log(err))
    } else {
        alert("Indique Ciudad")
    }

})