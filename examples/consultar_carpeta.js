const WatanaApi = require('../src/watana.js');

// Crear una instancia de la clase WatanaApi
const url = '<RUTA>';
const token = '<TOKEN>';
const watanaApi = new WatanaApi(url,token);


// Ejemplo de uso: Consultar una carpeta
const data = {
  carpeta_codigo: '123456789',
  // Otros datos de la solicitud...
};

watanaApi.ConsultarCarpeta(data, (response) => {
  console.log(response);
});
