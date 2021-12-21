exports.seed = async function (knex) {
  await knex("potluck_invites").insert([
    {
      potluck_id: 1,
      status: "attending",
      from: 1,
      to: 2,
      from_username: "test",
      to_username: "test2",
    },
    {
      potluck_id: 2,
      status: "attending",
      from: 2,
      to: 1,
      from_username: "test2",
      to_username: "test",
    },
    {
      potluck_id: 1,
      status: "pending",
      from: 1,
      to: 3,
      from_username: "test",
      to_username: "test3",
    },
  ]);
};
