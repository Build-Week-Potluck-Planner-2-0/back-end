const router = require("express").Router();

router.get("/:id", (req, res, next) => {
  res.json({ invitedTo: [1, 2] });
});

router.delete("/:id", (req, res, next) => {
  res.json(
    `delete user by id, delete all potlucks, delete all items, delete all invites related to ${req.params.id}`
  );
});

router.put("/:id", (req, res, next) => {
  res.json(
    `update information on ${req.params.id} user like username, not email or password`
  );
});

module.exports = router;
