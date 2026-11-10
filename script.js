let estadoElement = document.querySelector('span')


let conjunto_de_estados = {
	"0": "Clear sky",
	"1": "Mainly clear",
	"2": "Partly cloudy",
	"3": "Overcast",
	"45": "Fog",
	"48": "Depositing rime fog",
	"51": "Light drizzle",
	"53": "Moderate drizzle",
	"55": "Dense drizzle",
	"56": "Light freezing drizzle",
	"57": "Dense freezing drizzle",
	"61": "Slight rain",
	"63": "Moderate rain",
	"65": "Heavy rain",
	"66": "Light freezing rain",
	"67": "Heavy freezing rain",
	"71": "Slight snowfall",
	"73": "Moderate snowfall",
	"75": "Heavy snowfall",
	"77": "Snow grains",
	"80": "Slight rain showers",
	"81": "Moderate rain showers",
	"82": "Violent rain showers",
	"85": "Slight snow showers",
	"86": "Heavy snow showers",
	"95": "Thunderstorm",
	"96": "Thunderstorm with slight hail",
	"97": "Heavy thunderstorm",
	"99": "Thunderstorm with heavy hail"
}



const obtenerDatos = async () => {
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=38.91611&longitude=-6.34366&current=weather_code&timezone=Europe%2FMadrid&forecast_days=1';

  try {
    const respuesta = await fetch(url);
    if (!respuesta.ok) {
      throw new Error(`Error en la petición: ${respuesta.status}`);
    }
    const datos = await respuesta.json();

    let codigo_estado = datos.current.weather_code

    let estado = conjunto_de_estados[codigo_estado]

    estadoElement.textContent = estado






  } catch (error) {
    console.error('No se ha podido consultar el tiempo. Error:', error);
  }
};


obtenerDatos();






