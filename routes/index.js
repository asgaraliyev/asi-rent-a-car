var express = require('express');
var router = express.Router();
const categories_constants=require("../helpers/constants/categories_constant.js")
const home_slider_constants=require("../helpers/constants/home_slider_constant.js")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { categories_constants,home_slider_constants });
});

module.exports = router;
