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
