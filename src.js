const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

let listaProductos =[
    {
      "id":1,
      "nombre": "Nevera",
      "precioInicial": 2000000,
      "vidaUtil": 5,
      "precioFinal": 1000000,
      "periodo_consultado": 3,
      "tipo": "electrodomestico",
      "descripcion": "Nevera de 5 litros",
      "imagen": "https://www.ikea.com/es/es/images/products/nevera-de-5-litros-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    },
    {
      "id":2,
      "nombre": "Televisor",
      "precioInicial": 1000000,
      "vidaUtil": 3,
      "precioFinal": 7000000,
      "periodo_consultado": 3,
      "tipo": "electrodomestico",
      "descripcion": "Televisor de 32 pulgadas",
      "imagen": "https://www.ikea.com/es/es/images/products/televisor-32-pulgadas-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    },
    {
      "id":3,
      "nombre": "Lavadora",
      "precioInicial": 3000000,
      "vidaUtil": 15,
      "precioFinal": 700000,
      "periodo_consultado": 3,
      "tipo": "electrodomestico",
      "descripcion": "Lavadora de 5 kg",
      "imagen": "https://www.ikea.com/es/es/images/products/lavadora-de-5-kg-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    },
    {
      "id":4,
      "nombre": "Portatil",
      "precioInicial": 2500000,
      "vidaUtil": 7,
      "precioFinal": 1000000,
      "periodo_consultado": 3,
      "tipo": "electrodomestico",
      "descripcion": "Portatil de 15 pulgadas",
      "imagen": "https://www.ikea.com/es/es/images/products/portatil-de-15-pulgadas-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    },
    {
      "id":5,
      "nombre": "Escritorio en L",
      "precioInicial": 1000000,
      "vidaUtil": 5,
      "precioFinal": 100000,
      "periodo_consultado": 3,
      "tipo": "Muebles de oficina",
      "descripcion": "Escritorio en L",
      "imagen": "https://www.ikea.com/es/es/images/products/escritorio-en-l-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    }
  ];

app.get('/api/logistics/products', (req, res) =>{
    res.send(listaProductos);
});

app.post('/api/logistics/products', (req, res) => {
    listaProductos.push({
        "id":6,
        "nombre": "Escritorio en L",
        "precioInicial": 1000000,
        "vidaUtil": 5,
        "precioFinal": 100000,
        "periodo_consultado": 3,
        "tipo": "Muebles de oficina",
        "descripcion": "Escritorio en L",
        "imagen": "https://www.ikea.com/es/es/images/products/escritorio-en-l-s10991-stockholm-light-grey__03823_PE7446086_S4.JPG?f=s"
    });
    res.send(listaProductos)
});

/*app.listen(3000, () => {
    console.log('Server on port 3000');
});*/

module.exports = app;