const getUserUnrated = require('../../db/queries/ratings/getUserUnrated.js');

const getPendingRatings = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = jwt.verify(token, process.env.SECRET);
    const username = decodedToken.username
      ? decodedToken.username
      : decodedToken.newUsername;

    const unratedRatings = await getUserUnrated(username);

    res.send({
      status: 'ok',
      data: unratedRatings,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getPendingRatings;
