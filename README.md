# WatanaApi JS


Nuestra Biblioteca JS oficial de WatanaApi para NodeJS, es compatible con la [v1.0](https://ayuda.llama.pe/integracion/) de Watana API, con el cual tendrás la posibilidad de crear carpetas, consultarlas, eliminarlas, firmar pdfs, validarlos, y aplicarles sello de tiempo.


## Requisitos 

* NodeJS v20.
* Registrate [aquí](https://watana.pe/registro).
* Una vez registrado, si vas a realizar pruebas obtén tus llaves desde [aquí](https://watana.pe/auths).

> Recuerda que para obtener tus llaves debes ingresar a tu Watana.pe > WATANA API > ***Autenticacion***.

![alt tag](https://i.imgur.com/6i1moyJ.png)



## Instalación

```js
const WatanaApi = require('../src/watana.js');
// Crear una instancia de la clase WatanaApi
const url = '<RUTA>';
const token = '<TOKEN>';
const watanaApi = new WatanaApi(url,token);

```

## Enviar Carpeta

[Ver ejemplo completo](/examples/enviar_carpeta.js)

Puedes enviar una carpeta con archivos para ser firmada a Watana App.

```js
const data = {
  carpeta_codigo: "DOC001",
  titulo: "Documento o carpeta de ejemplo",
  descripcion: "Esta es la descripción de este documento",
  .....
}
watanaApi.EnviarCarpeta(data, (response) => {
  console.log(response);
});
```

## Consultar Carpeta

[Ver ejemplo completo](/examples/consultar_carpeta.js)

```js
const data = {
  carpeta_codigo: 'DOC001'
};

watanaApi.ConsultarCarpeta(data, (response) => {
  console.log(response);
});

```

## Descargar Carpeta

```js
const data = {
  carpeta_codigo: 'DOC001'
};

watanaApi.DescargarCarpeta(data, (response) => {
  console.log(response);
});
```

## Eliminar Carpeta

```js
const data = {
  carpeta_codigo: 'DOC001'
};

watanaApi.EliminarCarpeta(data, (response) => {
  console.log(response);
});
```

## Validar PDF

```js
const data = {
  zip_base64: 'XXXXX'
};

watanaApi.ValidarPdf(data, (response) => {
  console.log(response);
});
```

## Firmar PDF

```js
const data = {
  zip_base64: 'XXXXX'
};

watanaApi.FirmarPdf(data, (response) => {
  console.log(response);
});
```

## Sellar PDF

```js
const data = {
  zip_base64: 'XXXXX'
};

watanaApi.SellarPdf(data, (response) => {
  console.log(response);
});
```
    
## Pruebas

Antes de pasar tu cuenta a producción, te recomendamos realizar pruebas de integración. Así garantizarás un correcto despliegue.



## Documentación
¿Necesitas más información para integrar `watana-api-js`? La documentación completa se encuentra en [https://ayuda.llama.pe/integracion](https://ayuda.llama.pe/integracion)


