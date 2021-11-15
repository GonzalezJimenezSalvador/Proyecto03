//Muestra los coches que no sea Renault ni sean eléctricos y precio de alquiler sea entre 30 y 60 incluidos
db.vehiculos.find(
    {$and:
        [
            {marca:{$ne:"Renault"}},
            {motor:
                {$nin: 
                    ["Diesel","Gasolina"]
                }
            },
            {"precioalquiler":{$lte:60}},
            {"precioalquiler":{$gte:30}}
        ]
    }
).pretty()

//Muestra los coches sin alquilar que tienen en observaciones cambiar aceite O cambiar neumaticos
db.vehiculos.find(
    {$and: 
        [
            {$or:
                    [
                    {"observaciones":"Cambiar aceite"},
                    {"observaciones":"Cambiar neumaticos"},
                ]
            },
            {disponibilidad:false}
        ]
    } 
).pretty()

//Muestra los coches que tengan 2 o más extras entre las que debe haber almenos un extra entre los elegidos
db.vehiculos.find(
    {$and:
        [
            {extras:
                {$in:
                    ["Aire acondicionado", "Luces LED", "Techo solar"]
                }
            },
                {$nor:
                    [
                        {extras:{$size:1}},
                        {extras:{$size:0}}
                    ]
                }
        ]
    }
).pretty()

//Muestra los coches sin alquilar que tienen en observaciones cambiar aceite Y cambiar neumáticos
db.vehiculos.find(
    {$and:
        [
            {observaciones:
                {$all: 
                    ["Cambiar aceite", "Cambiar neumaticos"]
                }
            },
            {disponibilidad:false}
        ]
    }
).pretty()

//Muestra los coches que no sean diesel ni automaticos de Opel y Renault
db.vehiculos.find(
    {$and:
        [
            {motor:
                {$not:
                    {$regex: /Di.sel/}
                }
            },
            {automatico:
                {$nin:[false]}
            },
            {marca:
                {$in:["Opel","Renault"]}
            }
        ]
    }
).pretty()

//Muestra los coches con todos los extras
db.vehiculos.find(
    {extras: 
            {$size:5}
    },
).pretty()

//Muestra los coches sin extras
db.vehiculos.find(
        {extras: 
            {$exists:false}
        },
).pretty()

//Muestra los coches Peugeot que sean gasolina, automáticos y su consumo medio sea igual o menos de 4.5
db.vehiculos.find(
    {$and:
        [
            {automatico:true},
            {motor:"Gasolina"},
            {consumomediocarburante:{$lte:4.5}},
        ]
    }
).pretty()

//Muestra los coches que son Diésel pero no recuerdo si llevaban tilde o no.
db.vehiculos.find(
    {motor: 
        {$regex: /Di.sel/}
    }
).pretty()

//Muestra los coches que no sean diesel, disponibles, automaticos
db.vehiculos.find(
    {$and:
        [
            {motor:
                {$ne:
                    {$regex: /Di.sel/}
                }
            },
            {automatico:true},
            {disponibilidad:true}
        ]
    }
).pretty()

//Calcula la media de precio de todos los coches.
db.vehiculos.aggregate(
    [
        {$group:
            {"_id":"_id", Mediaprecio: 
                {$avg: "$precioalquiler"}
            }
        }
    ]
)


//Muestra todos los coches Peugeot y el resto sean automaticos ni gasolina ni electricos
db.vehiculos.find(
    {$or:
        [
            {$and:
                [
                    {automatico:{$eq:true}},
                        {$nor:
                            [
                                {motor:{$eq:"Gasolina"}},
                                {motor:{$eq:"Eléctrico"}},
                            ]
                        }
                ]
            },
            {marca:{$in:["Peugeot"]}},
        ]
    }
).pretty()