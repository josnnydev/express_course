let infoCursos ={ 
    'programacion':[
     {
        id: 1,
        titulo: 'Aprende Python',
        lenguaje: 'python',
        vistas: 15000,
        nivel: 'basico'
     },
     {
        id:2,
        titulo:'Python Intermedio',
        lenguaje: 'python',
        vistas: 13355,
        nivel: 'intermedio'
     },
     {
        id:3,
        titulo:'Aprende JavaScript',
        lenguaje: 'javascript',
        vistas: 102223,
        nivel: 'basico'
     }
],
     'matematicas':[
        {
            id:1,
            titulo:'Aprende Calculo',
            tema: 'calculo',
            vistas: 23454,
            nivel: 'basico'
        },
        {
            id:2,
            titulo:'Aprende Algebre',
            tema: 'algebra',
            vistas: 12454,
            nivel: 'intermedio'
        }


     ]

}

module.exports.infoCursos = infoCursos