const getPool = require('../../getDB.js');
const { generateError } = require('../../../helpers/generateError.js');

const selectOwnerRatings = async (username) => {
  try {
    const pool = await getPool();

    const [ratings] = await pool.query(
      `
      SELECT
      renting_id,
      rating,
      owner,
      tenant,
      comments,
      createdAt
      FROM tenant_ratings
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
