const router = require("express").Router();

router.get("/:user_id", (req, res, next) => {
  console.log(`here are all the potlucks for ${req.params.id}`);
});

router.get("/:user_id/:potluck_id", (req, res, next) => {
  console.log(`here is a single potluck related to ${req.params.id}`);
});

module.exports = router;
