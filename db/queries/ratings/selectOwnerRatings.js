const getPool = require('../../getDB.js');
const { generateError } = require('../../../helpers/generateError.js');

const selectOwnerRatings = async (username) => {
  try {
    const pool = await getPool();

    const [ratings] = await pool.query(
      `
      r.rental_id,
      o.renting_id,
      o.rating,
      o.owner,
      o.tenant,
      o.comments,
      o.createdAt
      FROM owner_ratings o
      JOIN rentals r ON t.renting_id = r.rental_rent_id
      WHERE owner=?
    `,
      [username]
    );

    return ratings;
  } catch (error) {
    console.error(error);
    throw generateError('Error en selectOwnerRatings', 500);
  }
};

module.exports = selectOwnerRatings;
