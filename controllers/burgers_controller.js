var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// GET ROUTE:
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj);
    });
});



// POST ROUTE:
router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (data) {
        console.log(data)
        res.redirect("/");
    });
});

// PUT ROUTE:
router.put("/api/burgers/:id", function (req, res) {
    var burgerID = req.params.id;
    burger.updateOne(burgerID, function (result) {
        console.log(result)
        res.status(200).end();
    });
});

module.exports = router;