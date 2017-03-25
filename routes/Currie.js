var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('Currie',
    { title: 'LAUCHLIN CURRIE',

    Texto:'"Cuando Lauchlin Currie llegó a Colombia por primera vez en 1949, como jefe de la primera misión del Banco Mundial a un país en desarrollo, Colombia estaba fuera del mundo, debatiéndose entre las ruinas dejadas por el asesinato de Gaitán, los miles de muertos de la violencia clásica y la liviandad intelectual del discurso conservador que pretendía imponerse a sangre y fuego. La especie de los economistas profesionales aún no existía y las decisiones de política económica eran tomadas por abogadosque se hacían llamar hacendistas y trataban de cuadrar las cifras del presupuesto nacional y promover el desarrollo con la ayuda de las ideas de algún economista muerto cuyo nombre ninguno sabía a ciencia cierta.',
    Texto1:'Sin embargo, lo que algunos sí sabían era que el país necesitaba ferrocarriles, energía eléctrica, equipos agrícolas y puertos (Sandilands, 1990, 161). El arribo de la misión dirigida por Currie era una respuesta a esas inquietudes. Lo que él hizo, lo sabemos todos, habría de ir mucho más allá de la aprobación o desaprobación de una lista de proyectos. Estas líneas intentan sugerir una interpretación de lo que Currie logró en los casi cuarenta años que vivió y pensó en Colombia. Tratan de resaltar el papel de la historia, de lo contingente de lo particular en el desarrollo de la política y de la teoríaeconómica. Tratan, también, de subrayar el extraño tejido que se forma cuando la historia de un individuo y la de un país se entrecruzan en circunstancias particulares e irrepetibles."',
Texto2:'Salazar, Boris. «CURRIE Y COLOMBIA: EL ASESOR QUE VINO DE LEJOS». Estudios Gerenciales 0, n.o 86 (31 de marzo de 2003): 63-78.',
    Foto:'/images/Currie.jpg',
    Texto3:'Economista canadiense. Nació en Nueva Escocia en 1902 y murió en Santafé de Bogotá el 23 de diciembre de 1993. Fue el creador de la Unidad de Poder Adquisitivo Constante (UPAC) y del Plan de Las Cuatro Estrategias durante el gobierno de Misael Pastrana Borrero (1971) en Colombia. Realizó sus estudios profesionales en el London School of Economics (Inglaterra). Antes de llegar a Colombia ocupó el cargo de asesor administrativo del presidente de Estados Unidos, Franklin Delano Roosevelt. En 1949 se trasladó a Colombia, donde realizó diversas labores como la creación del Departamento Nacional de Planeación (1959), importantes estudios sobre la agricultura, el transporte ferroviario y el plan de empleo, entre otras. Orientó la creación del Instituto Colombiano de Ahorro y Vivienda (Icavi), además de participar en diversas investigaciones sobre el desarrollo de Colombia y sobre políticas urbanas. También fue catedrático en las Universidades Javeriana, los Andes y Nacional. Como reconocimiento a sus investigaciones sobre economía en Colombia, Currie fue galardonado en dos ocasiones con la Cruz de Boyacá en el grado de Comendador y Gran Cruz. Currie es autor del documento Operación Colombia (1960), donde propuso la redistribución de los recursos humanos y habló de crear 500.000 empleos en la ciudad en un período de dos años. Otra obra suya es la titulada Acelerando el desarrollo (1964), texto que le mereció el primer premio patrocinado por la Sociedad de Desarrollo Internacional.',
}
  );
});

module.exports = router;
