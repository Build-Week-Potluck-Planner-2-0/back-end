exports.seed = async function (knex) {
  await knex("potlucks").insert([
    {
      date: "10-10-16",
      time: "7:00 pm",
      location: "Sun Valley",
      title: "Evening dinner with the smiths",
      description: "business dinner",
      createdBy: 1,
    },
    {
      date: "10-13-16",
      time: "1:00 pm",
      location: "Mountain View",
      title: "breakfast with the rodgers",
      createdBy: 2,
    },
  ]);
};
