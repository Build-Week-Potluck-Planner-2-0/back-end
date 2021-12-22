const router = require("express").Router();

const Potlucks = require("./potlucks-model");

// get all potlucks
router.get("/:user_id/potlucks", (req, res, next) => {
  Potlucks.getAll(req.params.user_id)
    .then((resp) => res.json(resp))
    .catch(next);
});

// get a single potluck
router.get("/:potluck_id", (req, res, next) => {
  Potlucks.getById(req.params.potluck_id)
    .then((resp) => res.json(resp))
    .catch(next);
});

// create a new potluck
router.post("/:user_id", (req, res, next) => {
  Potlucks.add(req.params.user_id, req.body)
    .then((resp) => res.json(resp))
    .catch(next);
});

module.exports = router;
