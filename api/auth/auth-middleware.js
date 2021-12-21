const User = require("../users/users-model");

const bcrypt = require("bcryptjs");
const { tokenBuilder } = require("./auth-helpers");
const { BCRYPT_ROUNDS } = require("../../config");

const validateUser = (req, res, next) => {
  const user = req.body;

  if (
    !user.password ||
    user.password.trim() === "" ||
    !user.username ||
    user.username.trim() === "" ||
    !user.email ||
    user.email.trim() === ""
  ) {
    return next({
      status: 400,
      message: "username, email and password required",
    });
  } else next();
};

const alreadyExistsInDb = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.getBy("email", email);

  if (user) return next({ status: 400, message: "email already in use" });
  else next();
};

const checkEmailExists = async (req, res, next) => {
  const { email } = req.body;

  const user = await User.getBy("email", email);

  if (!user)
    return next({
      status: 401,
      message: "that email is not registered to any user",
    });

  req.userFromDb = user;
  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const userFromDb = req.userFromDb;

  if (bcrypt.compareSync(password, userFromDb.password)) {
    req.token = tokenBuilder(userFromDb);
    next();
  } else next({ status: 401, message: "wrong password" });
};

const hashPassword = (req, res, next) => {
  const user = req.body;

  const hash = bcrypt.hashSync(user.password, BCRYPT_ROUNDS);
  user.password = hash;

  req.token = tokenBuilder(user);
  req.user = user;
  next();
};

module.exports = {
  validateUser,
  alreadyExistsInDb,
  checkEmailExists,
  validatePassword,
  hashPassword,
};
