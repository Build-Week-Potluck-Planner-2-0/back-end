const db = require("../../data/db-config");

const getAll = async (user_id) => {
  const hosted = await db("potlucks").where("createdBy", user_id);

  for (const potluck of hosted) {
    potluck.invites = await db("potluck_invites as pi").where(
      "pi.potluck_id",
      potluck.createdBy
    );
  }

  for (const potluck of hosted) {
    potluck.items = await db("potluck_items as pi").where(
      "pi.potluck_id",
      potluck.potluck_id
    );
  }

  const invitedTo = await db("potluck_invites as pi")
    .select("p.*")
    .where("pi.to", user_id)
    .join("potlucks as p", "p.potluck_id", "pi.potluck_id");

  for (const potluck of invitedTo) {
    potluck.invites = await db("potluck_invites as pi").where(
      "pi.potluck_id",
      potluck.createdBy
    );
  }

  for (const potluck of invitedTo) {
    potluck.items = await db("potluck_items as pi").where(
      "pi.potluck_id",
      potluck.potluck_id
    );
  }

  return {
    hosted,
    invitedTo,
  };
};

const getById = async (potluck_id) => {
  const potluck = await db("potlucks as p")
    .where("potluck_id", potluck_id)
    .first();

  potluck.invites = await db("potluck_invites as pi").where(
    "pi.potluck_id",
    potluck_id
  );

  potluck.items = await db("potluck_items as pi").where(
    "pi.potluck_id",
    potluck_id
  );

  return potluck;
};

const add = async (user_id, potluck) => {
  const potluckDetails = {
    date: potluck.date,
    time: potluck.time,
    location: potluck.time,
    title: potluck.title,
    description: potluck.description,
    createdBy: user_id,
  };

  await db("potlucks as p").insert(potluckDetails);

  const invites = potluck.invites;

  for (const invite of invites) {
    await db("potlucks_invites").insert(invite);
  }

  const items = potluck.items;

  for (const item of items) {
    await db("potlucks_items").insert(item);
  }

  return getAll(user_id);
};

module.exports = { getAll, getById, add };
