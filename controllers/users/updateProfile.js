const updateUser = require('../../db/queries/users/updateUser.js');
const jwt = require('jsonwebtoken');
const sharp = require('sharp');
const randomUUID = require('crypto').randomUUID;
const path = require('path');
const { createUpload } = require('../../helpers/index.js');

const updateProfile = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const username = decodedToken.username
      ? decodedToken.username
      : decodedToken.newUsername;

    const profilePic = req.files && req.files.profilePic;

    console.log(profilePic);

    let processedImage = '';

    if (profilePic && profilePic !== null) {
      const uploadsDir = path.join(__dirname, '../../uploads');
      await createUpload(uploadsDir);
      const photosDir = path.join(__dirname, `../../uploads/profile_pics/`);
      await createUpload(photosDir);

      const processedSingleImage = sharp(profilePic.data)
        .toFormat('webp')
        .webp({ quality: 80, effort: 6 })
        .resize({ width: 640, height: 800, fit: 'cover' });
      const imageFileName = `${randomUUID()}.webp`;

      await processedSingleImage.toFile(path.join(photosDir, imageFileName));
      processedImage = `http://localhost:3000/uploads/profile_pics/${imageFileName}`;
    } else {
      processedImage = 'Not changed';
    }

    const updatedUser = {
      ...(req.body.email && { email: req.body.email }),
      ...(req.body.username && { username: req.body.username }),
      ...(req.body.bio && { bio: req.body.bio }),
      ...(req.body.address && { address: req.body.address }),
      ...(processedImage ? { profilePic: processedImage } : ''),
    };

    const rowsAffected = await updateUser(
      updatedUser.email,
      updatedUser.username,
      updatedUser.bio,
      updatedUser.address,
      updatedUser.profilePic,
      username
    );

    if (rowsAffected === 0) {
      return res.status(400).json({
        error: 'No hay ningún dato para actualizar o ha ocurrido un error',
      });
    }

    const newUsername = updatedUser.username || username;
    const newEmail = updatedUser.email || decodedToken.email;

    const tokenPayLoad = {
      newUsername,
      newEmail,
    };
    const expiresIn = '30d';
    const newToken = jwt.sign(tokenPayLoad, process.env.SECRET, { expiresIn });
    res.send({ status: 'ok', data: { tokenPayLoad, expiresIn }, newToken });
  } catch (error) {
    next(error);
  }
};

module.exports = updateProfile;
