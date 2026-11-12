const ciudadElement = document.querySelector('#ciudad')
const temperaturaElement = document.querySelector('#temperatura')
const humedadElement = document.querySelector('#humedad')
const vientoElement = document.querySelector('#viento')
const horaElement = document.querySelector('#hora')
const estadoElement = document.querySelector('#estado')
const selectElement = document.querySelector('select')
const imgElement = document.querySelector('.icono')




const conjunto_de_estados = {
    "0": {
        texto: "Cielo despejado",
        icono: "clear-day.svg"
    },
    "1": {
        texto: "Principalmente despejado",
        icono: "mostly-clear-day.svg"
    },
    "2": {
        texto: "Parcialmente nublado",
        icono: "partly-cloudy-day.svg"
    },
    "3": {
        texto: "Cubierto",
        icono: "overcast.svg"
    },
    "45": {
        texto: "Niebla",
        icono: "fog.svg"
    },
    "48": {
        texto: "Niebla con depósito de cencellada",
        icono: "fog.svg"
    },
    "51": {
        texto: "Llovizna ligera",
        icono: "drizzle.svg"
    },
    "53": {
        texto: "Llovizna moderada",
        icono: "drizzle.svg"
    },
    "55": {
        texto: "Llovizna densa",
        icono: "drizzle.svg"
    },
    "56": {
        texto: "Llovizna helada ligera",
        icono: "freezing-drizzle.svg"
    },
    "57": {
        texto: "Llovizna helada densa",
        icono: "freezing-drizzle.svg"
    },
    "61": {
        texto: "Lluvia ligera",
        icono: "@partly-cloudy-day-rain.svg"
    },
    "63": {
        texto: "Lluvia moderada",
        icono: "rain.svg"
    },
    "65": {
        texto: "Lluvia fuerte",
        icono: "extreme-rain.svg"
    },
    "66": {
        texto: "Lluvia helada ligera",
        icono: "freezing-rain.svg"
    },
    "67": {
        texto: "Lluvia helada fuerte",
        icono: "freezing-rain.svg"
    },
    "71": {
        texto: "Nevada ligera",
        icono: "partly-cloudy-day-snow.svg"
    },
    "73": {
        texto: "Nevada moderada",
        icono: "snow.svg"
    },
    "75": {
        texto: "Nevada fuerte",
        icono: "extreme-snow.svg"
    },
    "77": {
        texto: "Cinco por ciento / Granos de nieve",
        icono: "snowflake.svg"
    },
    "80": {
        texto: "Chubascos de lluvia ligeros",
        icono: "partly-cloudy-day-rain.svg"
    },
    "81": {
        texto: "Chubascos de lluvia moderados",
        icono: "rain.svg"
    },
    "82": {
        texto: "Chubascos de lluvia violentos",
        icono: "extreme-rain.svg"
    },
    "85": {
        texto: "Chubascos de nieve ligeros",
        icono: "partly-cloudy-day-snow.svg"
    },
    "86": {
        texto: "Chubascos de nieve fuertes",
        icono: "extreme-snow.svg"
    },
    "95": {
        texto: "Tormenta",
        icono: "thunderstorms.svg"
    },
    "96": {
        texto: "Tormenta con granizo ligero",
        icono: "thunderstorms-rain.svg"
    },
    "97": {
        texto: "Tormenta fuerte",
        icono: "extreme-thunderstorms.svg"
    },
    "99": {
        texto: "Tormenta con granizo fuerte",
        icono: "severe-thunderstorm.svg"
    }
};


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

        const codigoClima = datos.current.weather_code.toString();
        const infoEstado = conjunto_de_estados[codigoClima]

        ciudadElement.textContent=selectElement.value
        temperaturaElement.textContent=datos.current.temperature_2m
        humedadElement.textContent=datos.current.relative_humidity_2m
        vientoElement.textContent=datos.current.wind_speed_10m
        horaElement.textContent=datos.current.time
        estadoElement.textContent = infoEstado.texto

        const nombreArchivoIcono = infoEstado.icono;
        imgElement.src = `img/${nombreArchivoIcono}`;

    } catch (error) {
        console.error('No se ha podido consultar el tiempo. Error:', error);
    }
};

selectElement.addEventListener('change', ()=> {
    obtenerDatos();
})







