const router = require("express").Router();

const User = require("../users/users-model");

const {
  validateUser,
  alreadyExistsInDb,
  checkEmailExists,
  validatePassword,
  hashPassword,
} = require("./auth-middleware");

router.post(
  "/register",
  validateUser,
  alreadyExistsInDb,
  hashPassword,
  (req, res, next) => {
    User.add(req.user)
      .then((newUser) => {
        newUser.token = req.token;
        res.status(201).json(newUser);
      })
      .catch(next);
  }
);

router.post(
  "/login",
  validateUser,
  checkEmailExists,
  validatePassword,
  (req, res, next) => {
    res.status(200).json({
      username: req.userFromDb.username,
      email: req.userFromDb.email,
      user_id: req.userFromDb.user_id,
      token: req.token,
    });
  }
);

module.exports = router;
