const { generateError } = require('../../../helpers/generateError.js');
const getPool = require('../../getDB.js');

const postRateTenant = async (username, id, rating, comments) => {
  const pool = await getPool();

  const [checkOwner] = await pool.query(
    `
      SELECT rental_owner FROM rentals WHERE rental_rent_id=?
    `,
    [id]
  );

  let ownerUsername;

  if (!checkOwner[0].rental_owner === username) {
    throw generateError(`No has sido inquilino de este alquiler`, 401);
  } else {
    ownerUsername = checkOwner[0].rental_owner;
  }

  const [postRating] = await pool.query(
    `
      INSERT INTO tenant_ratings (tenant, owner, renting_id, rating, comments)
      VALUES (?, ?, ?, ?, ?)
    `,
    [username, ownerUsername, id, rating, comments]
  );

  return postRating;
};

module.exports = { postRateTenant };
