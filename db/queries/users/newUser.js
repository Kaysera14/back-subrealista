const getPool = require('../../getDB');

const newUser = async ({
  username,
  email,
  address,
  bio,
  password,
  registrationCode,
  profilePic,
}) => {
  try {
    const pool = await getPool();
    const [{ insertID }] = await pool.query(
      `
      INSERT INTO users
      (username, email, address, bio, password, profilePic, registrationCode) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [username, email, address, bio, password, profilePic, registrationCode]
    );
    return insertID;
  } catch (error) {
    console.error('Error al crear tu usuario: ', error);
    throw error;
  }
};

module.exports = newUser;
