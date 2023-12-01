var express = require("express");
var router = express.Router();

const Places = require("../models/places");

// post d'un nouvel emplacement avec le user qui lui est associé
router.post("/places", (req, res) => {
  const newPlace = new Places({
    nickname: req.body.nickname,
    name: req.body.name,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
  });

  newPlace.save().then((data) => res.json({ result: true, newPlace: data }));
});

// recup de toutes les places en fonction du nickname dans les params
router.get("/places/:nickname", (req, res) => {
  Places.find({ nickname: req.params.nickname }).then((data) => {
    res.json({ result: true, places: data });
  });
});

// suppression d'une place en fonction du name ET du nickame du user
router.delete("/places", (req, res) => {
  Places.deleteMany({ nickname: req.body.nickname, name: req.body.name }).then(
    (data) => {
      res.json({ result: true, places: data });
    }
  );
});

module.exports = router;
