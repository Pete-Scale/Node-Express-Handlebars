const express = require('express');
const burger = require('../models/burger')
const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(data => {
        const hbsObject = { burgers: data }
        res.render("index", hbsObject);
    });
});

router.post("/api/burger", function(req, res) {
    burger.insertOne(req.body.burger_name, result => {
        res.json({ id: result.insterId });
    });
});

router.put("/api/burger/:id", function(req, res) {
    
    burger.updateOne(req.params.id, result => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});