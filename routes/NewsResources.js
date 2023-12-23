const express = require("express");
const router = express.Router();
const { resources, root } = require('../service/Resources');
const GetNewsResource = require("../controllers/NewsResources");

router.get("/:rsrcName",  GetNewsResource);
// router.get('/a', (req, res) => {
//     res.json(root.endpoints);
// })

module.exports = router;