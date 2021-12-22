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

// update a potluck
router.put("/:potluck_id/:user_id", (req, res, next) => {
  Potlucks.update(req.params.potluck_id, req.body, req.params.user_id)
    .then((resp) => res.json(resp))
    .catch(next);
});

// delete a potluck
router.delete("/:potluck_id/:user_id", (req, res, next) => {
  Potlucks.deletePotluck(req.params.potluck_id, req.params.user_id)
    .then((resp) => res.json(resp))
    .catch(next);
});

module.exports = router;
