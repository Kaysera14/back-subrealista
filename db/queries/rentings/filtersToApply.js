const getPool = require('../../getDB.js');

const filtersToApply = async (queryParams) => {
  const pool = await getPool();
  const {
    rent_location,
    min_price,
    max_price,
    min_rooms,
    max_rooms,
    min_date,
    max_date,
  } = queryParams;

  let sqlQuery =
    'SELECT r.rent_id, r.rent_owner, r.rent_title, r.rent_type, r.rent_rooms, r.rent_description, r.rent_price, r.rent_location, r.rent_address FROM rentings r LEFT JOIN rentals ON r.rent_id = rentals.rental_rent_id';
  const values = [];
  let clause = 'WHERE';

  if (rent_location) {
    sqlQuery += ` ${clause} rent_location LIKE ?`;
    values.push(`%${rent_location}%`);
    clause = 'AND';
  }

  if (min_price) {
    sqlQuery += ` ${clause} rent_price >= ?`;
    values.push(min_price);
    clause = 'AND';
  }

  if (max_price) {
    sqlQuery += ` ${clause} rent_price <= ?`;
    values.push(max_price);
    clause = 'AND';
  }

  if (min_rooms) {
    sqlQuery += ` ${clause} rent_rooms >= ?`;
    values.push(min_rooms);
    clause = 'AND';
  }

  if (max_rooms) {
    sqlQuery += ` ${clause} rent_rooms <= ?`;
    values.push(max_rooms);
    clause = 'AND';
  }

  if (min_date) {
    sqlQuery += ` ${clause} ? NOT BETWEEN rentals.rental_start AND rentals.rental_end`;
    values.push(new Date(min_date));
    clause = 'AND';
  }

  if (max_date) {
    sqlQuery += ` ${clause} ? NOT BETWEEN rentals.rental_start AND rentals.rental_end`;
    values.push(new Date(max_date));
    clause = 'AND';
  }

  const [rentings] = await pool.query(sqlQuery, values);
  return rentings;
};

module.exports = filtersToApply;
