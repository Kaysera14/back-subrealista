const selectTenantRatings = require('../../db/queries/ratings/selectTenantRatings.js');

const getTenantRatings = async (req, res, next) => {
  try {
    const { username } = req.params;
    const tenantRatings = await selectTenantRatings(username);

    if (tenantRatings.length !== 0) {
      res.send({
        status: 'ok',
        data: tenantRatings,
      });
    } else {
      res.send({
        status: 404,
        message: `El usuario ${username} no tiene valoraciones de otros inquilinos`,
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = getTenantRatings;
