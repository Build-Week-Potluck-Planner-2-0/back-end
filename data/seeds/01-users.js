exports.seed = async function (knex) {
  await knex("users").insert({
    username: "test",
    password: "$2a$08$4tW6aeJVjFMSscGqXdVwAeB4233k9WDftiiy4EAOP5sWojwwv/qai", // plain text password is test
    email: "test@gmail.com",
  });
};
