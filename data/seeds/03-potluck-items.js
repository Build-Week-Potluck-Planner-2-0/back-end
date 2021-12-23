exports.seed = async function (knex) {
  await knex("potluck_items").insert([
    {
      potluck_id: 1,
      name: "steak",
      quantity: 1,
      photo_url:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3RlYWt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description: "any kind will do, just enough for 5 people.",
      providedBy: null,
    },
    {
      potluck_id: 1,
      name: "juice",
      quantity: 2,
      providedBy: null,
      photo_url:
        "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8anVpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      description: "any kind will do, just enough for 5 people.",
    },
    {
      potluck_id: 2,
      name: "eggs",
      quantity: 12,
      providedBy: null,
    },
    {
      potluck_id: 2,
      name: "sausage",
      quantity: 1,
      description: "just 1 pack",
      providedBy: null,
    },
  ]);
};
