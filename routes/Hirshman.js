var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
  res.render('Hirshman',
    { title: 'ALBERT HIRSCHMAN',
    Texto:'Economista estadounidense de origen alemán que destacó por sus trabajos sobre el desarrollo económico en Latinoamérica. Hijo de Carl y Hedwig Hirschman, emigró de Alemania a causa del advenimiento del régimen nazi. Tras estudiar en la Sorbona de París (1934) y la Escuela de Altos Estudios Comerciales de la misma ciudad (1935), viajó a Londres y después a Trieste, en cuya Universidad se doctoró en Ciencias Económicas en 1938. Durante su estancia en Italia intervino en algunas actividades antifascistas y, tras la rendición de Francia en 1940, ayudó a escapar a diversos políticos e intelectuales.',
    Texto1:'Invitado por la Universidad de Berkeley en California, se trasladó a Estados Unidos, donde desarrolló su actividad profesional. Entre 1941 y 1943 disfrutó de una beca Rockefeller en dicho centro; entre 1943 y 1946 sirvió en el ejército norteamericano y, a su regreso, fue nombrado Jefe de la Sección Europea de la Reserva Federal, cargo que ejerció hasta 1952. Desde 1952 a 1956 trabajó para el gobierno de Colombia, primero como consejero financiero de la Junta de Planificación Nacional (1952-1954) y después como asesor económico privado del Gobierno en Bogotá (1954-1956).',
    Texto2:'Entre 1956 y 1958 fue profesor en la Universidad de Yale, y posteriormente de las de Columbia (1958-64) y Harvard (1964-74). A partir de 1974 ha trabajado en el Instituto de Estudios Avanzados de Princeton, centro que lo nombró profesor Emeritus en Ciencias Sociales. En su obra más importante, The Estrategy of Economic Development (Estrategia del desarrollo económico, 1958), mostró las claves del desarrollo económico en América Latina, así como las implicaciones sociales y políticas que han intervenido en el último siglo, en especial la transición desde las dictaduras de la década de 1970 a las democracias de los años 80.',
    Texto3:'Realizó también estudios sobre la historia del pensamiento político, los conflictos dentro de una sociedad capitalista, las formas de organización social y las consecuencias de acontecimientos claves de finales del siglo XX, como la caída de los regímenes comunistas de Europa del Este en 1989. Además de la ya mencionada, sus obras más significativas fueron Journeys Toward Progress: Studies of Economic Policy-Making in Latin America (Estudios sobre política económica en América Latina, 1963); Development Projects Observed (El comportamiento de los proyectos de desarrollo, 1967); Exit, Voice and Loyalty (1970); y The Retoric of Reaction (1971).',
    Foto:'/images/Hirshman.jpg',
    Cita: '“Albert O. Hirschman fue un “intelectual del desarrollo”. Más que un economista –que lo fue– interesado en aplicar técnicas y modelos económicos a la solución de los problemas del desarrollo, Hirschmanera un pensador. Un individuo con un capital intelectual superior que a través de sus escritos y de su participación en debates académicos ejerció una marcada influencia en la manera de entender la complejidad del desarrollo. Igualmente, lo hizo en disenso con fórmulas de la época –como la planeación “integral” o el crecimiento “equilibrado”– que eran, además, imposibles de aplicar en la realidad.',
    Cita1: 'Colombia fue el primer país del mundo en desarrollo en el cual Hirschman se aproximó a los problemas de desarrollo. Su experiencia en el país, en donde residió por casi cinco años, fue importante para la elaboración de su libro The strategy of economic development, de cuya publicación se están celebrando cincuenta años.”',
Cita2: 'Caballero Argáez, Carlos. «Albert Hirschman in Colombia and development planning». Desarrollo y Sociedad, n.o 62 (septiembre de 2008): 165-202',
}
  );
});

module.exports = router;
