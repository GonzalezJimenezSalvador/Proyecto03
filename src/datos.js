
/*
Mi base de datos trata sobre una página web donde poder alquilar un coche en función de sus características.

http://www.vinuesa.com/ofimatica/access_coches.pdf
https://www.auto-data.net/es/
https://www.quecochemecompro.com/blog/comparativa-coches-electricos-guia-de-compra/
*/


//Peugeot 208 1 diesel + 2 gasolinaAuto
//Peugeot 2008 2 dieselAuto + 1 gasolina
//2 electricos de peugeot e-208 e-2008 
//Total 8

//2 electricos opel corsa-e y mokka-e
//Opel Corsa 1 diesel + 2 gasolinaAuto
//Opel Mokka 2 dieselAuto + 1 gasolina
//Opel Astra 1 dieselAuto + 1 gasolina
//Total 10

//2 electricos renault ZOE y Twingo
//Renault Twingo 1 Gasolina
//Renault Clio  1 Diesel + 2 GasoliaAuto
//Renault Megane 2 DieselAuto + 1Gasolina
//Total 9

db.vehiculos.drop(),

db.vehiculos.insertOne({
_id: 1,
matricula: "8798 YPH", 
marca: "Peugeot", 
modelo: "e-208", 
motor: "Eléctrico", 
precioalquiler: 50, 
potencia: 136,
consumomedioenergia:00,
automatico: true, 
extras: ["Aire acondicionado", "Asientos calefactables", "Luces LED", "WiFi", "Techo solar"],
observaciones: ["Cambiar aceite", "Cambiar neumaticos", "Luna rota"], 
disponibilidad: true,
})

db.vehiculos.insertMany([

    {_id: 2, matricula: "2650 GGG", marca: "Peugeot", modelo: "208 1.5 BlueHDi", motor: "Diésel", precioalquiler: 45, potencia: 100, consumomediocarburante: 3.2, automatico: false, extras: ["Aire acondicionado"], observaciones: ["Cambiar aceite"], disponibilidad: false},
    {_id: 3, matricula: "8344 LEN", marca: "Peugeot", modelo: "208 1.2 PureTech Automatic", motor: "Gasolina", precioalquiler: 35, potencia: 100, consumomediocarburante: 4.5, automatico: true, extras: ["Aire acondicionado", "Asientos calefactables", "Luces LED", "WiFi", "Techo solar"], disponibilidad: true},
    {_id: 4, matricula: "5435 VWA", marca: "Peugeot", modelo: "208 1.2 PureTech", motor: "Gasolina", precioalquiler: 25, potencia: 75, consumomediocarburante: 4.1, automatico: false, extras: ["Aire acondicionado", "Asientos calefactables", "Luces LED", "Techo solar"], disponibilidad: false},
    {_id: 5, matricula: "7788 UVQ", marca: "Peugeot", modelo: "e-2008", motor: "Eléctrico", precioalquiler: 80, potencia: 136, consumomedioelectrico: 0, automatico: true, extras: ["Aire acondicionado"], disponibilidad: true},
    {_id: 6, matricula: "5651 EKV", marca: "Peugeot", modelo: "2008 1.5 BlueHDi", motor: "Diésel", precioalquiler: 50, potencia: 100, consumomediocarburante: 3.6, automatico: false, extras: ["Aire acondicionado", "Asientos calefactables", "Luces LED"], disponibilidad: true},
    {_id: 7, matricula: "3242 ZYV", marca: "Peugeot", modelo: "2008 1.5 BlueHDi", motor: "Diésel", precioalquiler: 70, potencia: 100, consumomediocarburante: 3.6, automatico: true, extras: ["Aire acondicionado", "Techo solar"], disponibilidad: true},
    {_id: 8, matricula: "8558 NPS", marca: "Peugeot", modelo: "2008 1.2 PureTech", motor: "Gasolina", precioalquiler: 55, potencia: 130, consumomediocarburante: 4.3, automatico: true, extras: ["Aire acondicionado", "Techo solar", "Luces LED"], disponibilidad: true},
    {_id: 9, matricula: "4670 RUF", marca: "Opel", modelo: "Corsa-e", motor: "Eléctrico", precioalquiler: 65, potencia: 136, consumomedioelectrico: 17, automatico: true, extras: ["Aire acondicionado", "Asientos calefactables", "Luces LED", "WiFi", "Techo solar"], disponibilidad: false},
    {_id: 10, matricula: "3913 YCZ", marca: "Opel", modelo: "Corsa 1.5 Diesel", motor: "Diésel", precioalquiler: 45, potencia: 102, consumomediocarburante: 3.3, automatico: false, extras: ["Aire acondicionado", "Asientos calefactables", "WiFi"], disponibilidad: false},
    {_id: 11, matricula: "3834 XYZ", marca: "Opel", modelo: "Corsa 1.2 Turbo Automatic", motor: "Gasolina", precioalquiler: 35, potencia: 130, consumomediocarburante:4.5, automatico: true, extras: ["Aire acondicionado", "Luces LED", "Techo solar"], observaciones: ["Luna rota"], disponibilidad: false},
    {_id: 12, matricula: "7994 NYU", marca: "Opel", modelo: "Corsa 1.2 Turbo", motor: "Gasolina", precioalquiler: 25, potencia: 100, consumomediocarburante: 4.3, automatico: false, disponibilidad: false},
    {_id: 13, matricula: "7588 RYL", marca: "Opel", modelo: "Mokka-e", motor: "Eléctrico", precioalquiler: 80, potencia: 136, consumomedioelectrico: 17.8, automatico: true, extras: ["Aire acondicionado", "Luces LED"], disponibilidad: false},
    {_id: 14, matricula: "5582 KDQ", marca: "Opel", modelo: "Mokka 1.5 Diesel", motor: "Diesel", precioalquiler: 50, potencia: 110, consumomediocarburante: 3.8, automatico: false, extras: ["Aire acondicionado", "Asientos calefactables", "Luces LED", "WiFi", "Techo solar"], disponibilidad: false},
    {_id: 15, matricula: "9796 DMD", marca: "Opel", modelo: "Mokka 1.2 Turbo Automatic", motor: "Gasolina", precioalquiler: 45, potencia: 130, consumomediocarburante: 4.8, automatico: true, extras: ["Aire acondicionado", "Techo solar"], disponibilidad: false},
    {_id: 16, matricula: "6304 QII", marca: "Opel", modelo: "Mokka 1.2 Turbo", motor: "Gasolina", precioalquiler: 40, potencia: 130, consumomediocarburante: 4.5, automatico: false, disponibilidad: true},
    {_id: 17, matricula: "5452 CLI", marca: "Opel", modelo: "Astra 1.5d", motor: "Diésel", precioalquiler: 60, potencia: 122, consumomediocarburante: 4.6, automatico: true, extras: ["Aire acondicionado", "Luces LED", "WiFi", "Techo solar"], disponibilidad: true},
    {_id: 18, matricula: "3251 UZU", marca: "Opel", modelo: "Astra 1.4 Turbo", motor: "Gasolina", precioalquiler: 50, potencia: 145, consumomediocarburante: 4.8, automatico: false, observaciones: ["Cambiar aceite"], disponibilidad: false},
    {_id: 19, matricula: "7751 TXF", marca: "Renault", modelo: "Zoe", motor: "Eléctrico", precioalquiler: 50, potencia: 108, consumomedioelectrico: 17.2, automatico: true, extras: ["Aire acondicionado", "Asientos calefactables", "Luces LED", "Techo solar"], disponibilidad: true},
    {_id: 20, matricula: "7662 RAE", marca: "Renault", modelo: "Twingo Z.E.", motor: "Eléctrico", precioalquiler: 40, potencia: 81, consumomedioelectrico: 12.3, automatico: true, extras: ["Aire acondicionado", "Luces LED", "WiFi", "Techo solar"], disponibilidad: true},
    {_id: 21, matricula: "7016 LBS", marca: "Renault", modelo: "Twingo 1.0", motor: "Gasolina", precioalquiler: 20, potencia: 73, consumomediocarburante: 5.3, automatico: false, extras: ["Aire acondicionado", "Luces LED", "WiFi", "Techo solar"], disponibilidad: true},
    {_id: 22, matricula: "1425 LYZ", marca: "Renault", modelo: "Clio 1.5 Blue dCi", motor: "Diésel", precioalquiler: 35, potencia: 115, consumomediocarburante: 3.6, automatico: false, extras: ["Aire acondicionado", "Techo solar"], disponibilidad: true},
    {_id: 23, matricula: "1221 IDX", marca: "Renault", modelo: "Clio 1.3 TCe EDC", motor: "Gasolina", precioalquiler: 30, potencia: 130, consumomediocarburante: 5.2, automatico: true, disponibilidad: false},
    {_id: 24, matricula: "2323 BPO", marca: "Renault", modelo: "Clio 1.0 TCe", motor: "Gasolina", precioalquiler: 23, potencia: 65, consumomediocarburante: 4.9, automatico: false, extras: ["Aire acondicionado", "Luces LED", "Techo solar"], disponibilidad: false},
    {_id: 25, matricula: "4168 NIS", marca: "Renault", modelo: "Megane 1.5 Blue dCi", motor: "Diésel", precioalquiler: 40, potencia: 115, consumomediocarburante: 4.6, automatico: false, disponibilidad: true},
    {_id: 26, matricula: "6345 CHV", marca: "Renault", modelo: "Megane 1.5 Blue dCi EDC", motor: "Diésel", precioalquiler: 45, potencia: 115, consumomediocarburante: 4.5, automatico: true, extras: ["Aire acondicionado", "Techo solar"], observaciones: ["Cambiar aceite","Cambiar neumaticos"], disponibilidad: false},
    {_id: 27, matricula: "5845 DXI", marca: "Renault", modelo: "Megane 1.3 TCe", motor: "Gasolina", precioalquiler: 35, potencia: 140, consumomediocarburante: 5.9, automatico: false, extras: ["Aire acondicionado", "Luces LED", "WiFi", "Techo solar"], disponibilidad: true},
])

