const selectOwnerRatings = require('../../db/queries/ratings/selectOwnerRatings.js');

const getOwnerRatings = async (req, res, next) => {
  try {
    const { username } = req.params;
    const ownerRatings = await selectOwnerRatings(username);

    if (ownerRatings.length !== 0) {
      res.send({
        status: 'ok',
        data: ownerRatings,
      });
    } else {
      res.send({
        status: 404,
        message: `El usuario ${username} no tiene valoraciones como inquilino`,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getOwnerRatings;
