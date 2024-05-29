const getPool = require('../../getDB.js');
const { generateError } = require('../../../helpers/generateError.js');

const selectTenantRatings = async (username) => {
  try {
    const pool = await getPool();

    const [ratings] = await pool.query(
      `
    SELECT
    r.rental_id,
    t.renting_id,
    t.rating,
    t.owner,
    t.tenant,
    t.comments,
    t.createdAt
    FROM tenant_ratings t
    JOIN rentals r ON t.renting_id = r.rental_rent_id
    WHERE tenant=?
    `,
      [username]
    );

    return ratings;
  } catch (error) {
    console.error(error);
    throw generateError('Error en selectTenantRatings', 500);
  }
};

module.exports = selectTenantRatings;
