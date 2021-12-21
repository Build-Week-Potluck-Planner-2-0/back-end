const db = require("../../data/db-config");

const getById = async (user_id) => {
  return await db("users").where("user_id", user_id).first();
};

const getBy = async (arg1, arg2) => {
  return await db("users").where(arg1, arg2).first();
};

const add = async (newUser) => {
  const [createdUser] = await db("users")
    .insert(newUser)
    .returning(["user_id", "email", "username"]);

  return createdUser;
};

module.exports = { getById, add, getBy };
