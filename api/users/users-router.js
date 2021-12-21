const router = require("express").Router();

router.get("/:id", (req, res, next) => {
  res.json(`return all info related to user:  ${req.params.id}`);
});

router.post("/", (req, res, next) => {
  res.json(`creating a new user `);
});

router.delete("/:id", (req, res, next) => {
  res.json(
    `delete user by id, delete all potlucks, delete all items, delete all invites related to ${req.params.id}`
  );
});

router.put("/:id", (req, res, next) => {
  res.json(`update information on ${req.params.id} user`);
});

module.exports = router;
