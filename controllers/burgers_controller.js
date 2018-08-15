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
    burger.updateOne(req.params.id, function (data) {
        console.log("put", data);
    });
});

module.exports = router;