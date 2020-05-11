var express = require('express');
var router = express.Router();
var controller = require("../controllers/controller.transaction")




//Lish transactions
router.get("/", controller.trans);


// Detail transactions
router.get('/detail/:id/book/:bookId/user/:userId', controller.detailborrow);
// Add
router.get("/add",controller.getAdd);
router.post('/add', controller.postAdd);

/// Change complete

router.get("/:id/complete", controller.changeStatus)

module.exports = router;