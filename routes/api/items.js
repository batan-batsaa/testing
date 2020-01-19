const express = require("express");
const router = express.Router();

//ITEM MODEL
const Item = require("../../models/Item");

// @route GET api/items
// @desc GET All Items
// @access Public
router.get("/", (req, res) => {
    Item.find(req.query).sort({ date: -1 })
        .then(data => res.json(data))
        .catch(err => console.log(err));
})

// @route POST api/items
// @desc Create A Item
// @access Public
router.post("/", (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save()
        .then(data => res.json(data))
        .catch(err => console.log(err));
})

// @route DELETE api/items
// @desc DELETE A Item
// @access Public
router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(data => data.remove()
            .then(() => res.json({ msg: "Successfully Deleted" })))
        .catch(err => res.status(404).send({ msg: "Failed to delete" }))
})

module.exports = router;
