const router = require("express").Router();
const Users = require("./users-model");

router.delete("/:id", (req, res, next) => {
  res.json(
    `delete user by id, delete all potlucks, delete all items, delete all invites related to ${req.params.id}`
  );
});

router.get("/", (req, res, next) => {
  Users.getAll()
    .then((allUsers) => res.status(200).json(allUsers))
    .catch(next);
});

router.put("/:id", (req, res, next) => {
  res.json(
    `update information on ${req.params.id} user like username, not email or password`
  );
});

module.exports = router;
