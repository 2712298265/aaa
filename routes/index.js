var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
	var date = new Date();
	var hour = date.getHours();
	var min = date.getMinutes();
	var second = date.getSeconds();
	date.setMinutes(hour+2);
	res.json({date})
});
module.exports = router;

