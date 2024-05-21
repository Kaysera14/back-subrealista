const { getMyRentings } = require('../../db/queries/rentals/getMyRentings.js');
const jwt = require('jsonwebtoken');

const myRentings = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const username = decodedToken.username;

    const userRentings = await getMyRentings(username);

    if (userRentings.length !== 0) {
      res.send({
        status: 'ok',
        message: 'Listado de peticiones recibidas: ',
        data: userRentings,
      });
    } else {
      res.send({
        status: 404,
        message: `El usuario: ${username} no ha realizado ningúna publicación.`,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = myRentings;
