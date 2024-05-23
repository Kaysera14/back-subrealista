const bcrypt = require('bcrypt');
const newUser = require('../../db/queries/users/newUser');
const crypto = require('crypto');
const { sendMail } = require('../../helpers');
const { generateError } = require('../../helpers/generateError.js');
const getUsername = require('../../db/queries/users/getUsername');
const sharp = require('sharp');
const randomUUID = require('crypto').randomUUID;
const path = require('path');
const { createUpload } = require('../../helpers/index.js');

const createNewUser = async (req, res, next) => {
  try {
    const { username, email, password, repeatPassword, address, bio } =
      req.body;

    console.log(req.files);

    const profilePic = req.files && req.files.profilePic;

    let processedImage = '';

    if (profilePic && profilePic !== null) {
      const uploadsDir = path.join(__dirname, '../../uploads');
      await createUpload(uploadsDir);
      const photosDir = path.join(__dirname, `../../uploads/profile_pics/`);
      await createUpload(photosDir);

      const processedSingleImage = sharp(profilePic.data)
        .toFormat('webp')
        .resize({ width: 640, height: 800, fit: 'cover' });
      const imageFileName = `${randomUUID()}.webp`;

      await processedSingleImage.toFile(path.join(photosDir, imageFileName));
      processedImage = `http://localhost:3000/uploads/profile_pics/${imageFileName}`;
    } else {
      processedImage = null;
    }

    console.log(password, repeatPassword);

    if (password !== repeatPassword) {
      throw generateError('Las contraseñas no coinciden.', 400);
    }

    if (
      (username?.length === 0 &&
        email?.length === 0 &&
        password?.length === 0 &&
        repeatPassword?.length === 0) ||
      address?.length === 0 ||
      bio?.length === 0
    ) {
      throw generateError('Faltan campos por rellenar.', 400);
    }

    if (username) {
      const userDB = await getUsername(username);
      if (username === userDB?.username) {
        throw generateError('Este nombre de usuario ya existe.', 400);
      }
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const registrationCode = crypto.randomUUID();

    await newUser({
      ...req.body,
      password: encryptedPassword,
      registrationCode: registrationCode,
      profilePic: processedImage,
    });

    await sendMail({
      to: email,
      subject: 'Verifica tu correo electrónico',
      HTMLPart: `Para verificar tu cuenta, haz <a href="http://localhost:5173/validate?registrationCode=${registrationCode}" target="_blank">click aquí</a> o copia el siguiente código: ${registrationCode}`,
    });

    res.status(201).send({
      status: 'ok',
      data: { email, username, createdAt: new Date() },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = createNewUser;
