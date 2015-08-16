var express = require('express');
var router = express.Router();
var indexController = requires('../controllers/index');

/* GET home page. */
router.get('/', indexController.renderIndex);



module.exports = router;
