exports.up = async (knex) => {
  await knex.schema
    .createTable("users", (user) => {
      user.increments("user_id");
      user.string("email", 200).notNullable().unique();
      user.string("username", 200).notNullable().unique();
      user.string("password", 200).notNullable();
    })
    .createTable("potlucks", (potluck) => {
      potluck.increments("potluck_id");
      potluck.string("date", 200).notNullable();
      potluck.string("time", 200).notNullable();
      potluck.string("location", 200).notNullable();
      potluck.string("title", 200).notNullable();
      potluck.string("description", 200);

      potluck
        .integer("createdBy")
        .unsigned()
        .notNullable()
        .references("users.user_id")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");
    })
    .createTable("potluck_items", (item) => {
      item.increments("item_id");
      item.string("name", 200).notNullable();
      item.integer("quantity", 200).defaultTo(1);
      item.string("photo_url", 200);
      item.string("description", 200);

      item
        .integer("potluck_id")
        .unsigned()
        .references("potlucks.potluck_id")
        .onDelete("CASCADE")
        .onUpdate("RESTRICT");

      item
        .integer("providedBy")
        .unsigned()
        .references("users.user_id")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("potluck_invites", (invite) => {
      invite.increments("invite_id");
      invite.string("status", 200).defaultTo("pending").notNullable();

      invite
        .integer("potluck_id")
        .unsigned()
        .notNullable()
        .references("potlucks.potluck_id")
        .onDelete("CASCADE")
        .onUpdate("RESTRICT");

      invite
        .integer("to")
        .unsigned()
        .notNullable()
        .references("users.user_id")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");

      invite.string("to_username", 30).notNullable();

      invite
        .integer("from")
        .unsigned()
        .notNullable()
        .references("users.user_id")
        .onDelete("RESTRICT")
        .onUpdate("RESTRICT");

      invite.string("from_username", 30).notNullable();
    });
};

exports.down = async (knex) => {
  await knex.schema
    .dropTableIfExists("potluck_invites")
    .dropTableIfExists("potluck_items")
    .dropTableIfExists("potlucks")
    .dropTableIfExists("users");
};
