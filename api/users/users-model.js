const db = require("../../data/db-config");

const getById = async (user_id) => {
  return await db("users").where({ user_id }).first();
};

const getBy = async (arg1, arg2) => {
  return await db("users").where(arg1, arg2).first();
};

const add = async (newUser) => {
  const [newUserId] = await db("users").insert(newUser);

  return getById(newUserId);
};

module.exports = { getById, add, getBy };
