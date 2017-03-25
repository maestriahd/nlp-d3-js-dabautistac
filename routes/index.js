var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'EL LEGADO DE LAUCHLIN CURRIE Y ALBERT HIRSCHMAN A LA ECONOMÍA COLOMBIANA',
  banner: '/images/banner.png',
  Título:'La Misión del Banco Mundial a Colombia de 1949, y las visiones opuestas de Lauchil Currie y Albert Hirshman | Por Roger Sandilands.',
Cita:'"Como relata en detalle Alacevich (2009), Lauchlin Currie (1902-1993) fue escogido en 1949 para dirigir la primera de las misiones de estudios integrales del Banco Mundial en Colombia (ver también Sandilands, 1990). Después de presentar su Informe, Currie regresó a Colombia para asesorar la implementación de sus recomendaciones, que incluían la creación de una junta de planeación nacional. En 1952 Albert Hirschman (1915-2012) fue contratado por el banco central de Colombia como asesor de su junta, con vínculos con el Banco Mundial.',
Cita1: 'Este artículo describe la forma en que Currie y Hirschman influyeron en las primeras operaciones del Banco y en la reflexión más amplia sobre la teoría y la política del desarrollo económico."',
Cita2:'Sandilands, Roger. «La Misión Del Banco Mundial a Colombia De 1949, Y Las Visiones Opuestas De Lauchlin Currie Y Albert Hirschman (The 1949 World Bank Mission to Colombia, and the Competing Visions of Lauchlin Currie (1902-93) and Albert Hirschman (1915-2012))», 2015.',
}
  );
});
module.exports = router;
