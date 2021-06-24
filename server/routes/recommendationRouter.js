const express = require("express");
const router = express.Router();

router.get(
  "/all",
  recommendationController.getAllRecommendations,
  (req, res) => {
    res.status(200).send(res.locals.recommendations);
  }
);

router.post(
  "/add",
  recommendationController.addRecommendations,
  recommendationController.getAllRecommendations,
  (req, res) => {
    res.status(200).send(res.locals.recommendations);
  }
);

router.delete(
  "/delete",
  recommendationController.deleteRecommendations,
  recommendationController.getAllRecommendations,
  (req, res) => {
    res.status(200).send(res.locals.recommendations);
  }
);

module.exports = router;
