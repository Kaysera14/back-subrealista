const getPool = require('../../getDB.js');

const updateUser = async (
  email,
  username,
  bio,
  address,
  profilePic,
  oldUsername
) => {
  try {
    const pool = await getPool();

    const [profileImage] = await pool.query(
      `SELECT profilePic FROM users WHERE username = ?`,
      [username !== oldUsername ? oldUsername : username]
    );

    const [rentings] = await pool.query(
      `
        UPDATE rentings
        SET rent_owner = ?
        WHERE rent_owner = ?
      `,
      [username, oldUsername]
    );

    const [rentals_owner] = await pool.query(
      `
        UPDATE rentals
        SET rental_owner = ?
        WHERE rental_owner = ?
      `,
      [username, oldUsername]
    );

    const [rentals_tenant] = await pool.query(
      `
        UPDATE rentals
        SET rental_tenant = ?
        WHERE rental_tenant = ?
      `,
      [username, oldUsername]
    );

    const [owner_ratings] = await pool.query(
      `
        UPDATE owner_ratings
        SET owner = ?
        WHERE owner = ?
      `,
      [username, oldUsername]
    );

    const [tenant_ratings] = await pool.query(
      `
        UPDATE tenant_ratings
        SET tenant = ?
        WHERE tenant = ?
      `,
      [username, oldUsername]
    );
    console.log(profileImage);
    if (profilePic === 'Not changed') {
      const [result] = await pool.query(
        `
        UPDATE users
        SET email = ?, username = ?, bio = ?, address = ?, profilePic = ?
        WHERE username = ?
      `,
        [email, username, bio, address, profileImage[0].profilePic, oldUsername]
      );
      return result.affectedRows;
    } else {
      const [result] = await pool.query(
        `
        UPDATE users
        SET email = ?, username = ?, bio = ?, address = ?, profilePic = ?
        WHERE username = ?
      `,
        [email, username, bio, address, profilePic, oldUsername]
      );
      return result.affectedRows;
    }
  } catch (error) {
    console.error('Error al modificar el usuario:', error);
    throw error;
  }
};

module.exports = updateUser;
