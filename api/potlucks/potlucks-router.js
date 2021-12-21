const router = require("express").Router();

router.get("/:user_id", (req, res, next) => {
  res.json(`here are all the potlucks for ${req.params.user_id}`);
});

router.get("/:user_id/:potluck_id", (req, res, next) => {
  res.json(
    `here is a single potluck with id ${req.params.potluck_id} related to ${req.params.user_id}`
  );
});

module.exports = router;
