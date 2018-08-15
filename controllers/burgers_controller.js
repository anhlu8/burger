var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObj = {
            burgers: data
        };
        // console.log(hbsObj);
        res.render("index", hbsObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(req.body.burger_name, function (data) {
        console.log("post", data);
        res.render("index", data);
    });
});

router.put("/api/burgers/:id", function (req, res) {
    console.log(req.params.id);
    burger.updateOne(req.params.id, function (result) {
        if (err) {
            return res.status(500).end();
        } else if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;