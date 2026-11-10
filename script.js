let ciudadElement = document.querySelector('#ciudad')
let temperaturaElement = document.querySelector('#temperatura')
let humedadElement = document.querySelector('#humedad')
let vientoElement = document.querySelector('#viento')
let horaElement = document.querySelector('#hora')
let estadoElement = document.querySelector('#estado')
let selectElement = document.querySelector('select')


const conjunto_de_estados = {
    "0": "Cielo despejado",
    "1": "Principalmente despejado",
    "2": "Parcialmente nublado",
    "3": "Cubierto",
    "45": "Niebla",
    "48": "Niebla con depósito de cencellada",
    "51": "Llovizna ligera",
    "53": "Llovizna moderada",
    "55": "Llovizna densa",
    "56": "Llovizna helada ligera",
    "57": "Llovizna helada densa",
    "61": "Lluvia ligera",
    "63": "Lluvia moderada",
    "65": "Lluvia fuerte",
    "66": "Lluvia helada ligera",
    "67": "Lluvia helada fuerte",
    "71": "Nevada ligera",
    "73": "Nevada moderada",
    "75": "Nevada fuerte",
    "77": "Cinco por ciento / Granos de nieve",
    "80": "Chubascos de lluvia ligeros",
    "81": "Chubascos de lluvia moderados",
    "82": "Chubascos de lluvia violentos",
    "85": "Chubascos de nieve ligeros",
    "86": "Chubascos de nieve fuertes",
    "95": "Tormenta",
    "96": "Tormenta con granizo ligero",
    "97": "Tormenta fuerte",
    "99": "Tormenta con granizo fuerte"
}

const lugares = {
    Merida : 'https://api.open-meteo.com/v1/forecast?latitude=38.918&longitude=-6.3429&current=weather_code,temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto',
    Madrid : 'https://api.open-meteo.com/v1/forecast?latitude=40.4165&longitude=-3.7026&current=weather_code,temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto',
    Barcelona : 'https://api.open-meteo.com/v1/forecast?latitude=41.3888&longitude=2.159&current=weather_code,temperature_2m,relative_humidity_2m,wind_speed_10m&timezone=auto'
}



const obtenerDatos = async () => {

    const url = lugares[selectElement.value]

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`Error en la petición: ${respuesta.status}`);
        }
        const datos = await respuesta.json();

        ciudadElement.textContent=selectElement.value
        temperaturaElement.textContent=datos.current.temperature_2m
        humedadElement.textContent=datos.current.relative_humidity_2m
        vientoElement.textContent=datos.current.wind_speed_10m
        horaElement.textContent=datos.current.time
        estadoElement.textContent = conjunto_de_estados[datos.current.weather_code]


    } catch (error) {
        console.error('No se ha podido consultar el tiempo. Error:', error);
    }
};

selectElement.addEventListener('change', ()=> {
    obtenerDatos();
})







