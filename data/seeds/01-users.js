exports.seed = async function (knex) {
  await knex("users").insert({
    username: "test",
    password: "test", // plain text password is 1234
    email: "test@gmail.com",
  });
};
