let estadoElement = document.querySelector('span')


let conjunto_de_estados = {
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






