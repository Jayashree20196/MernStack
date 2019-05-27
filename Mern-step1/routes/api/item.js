const express = require("express");
const router = express.Router();

const Item = require("../../models/item");

// @route GET api/items
// @desc for api
// @access Public

router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route POST api/items
// @desc for create new post request
// @access Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        price: req.body.price

    });
    newItem.save().then(item => res.json(item));
});


module.exports = router;