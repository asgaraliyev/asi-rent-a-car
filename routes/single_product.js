import express from 'express'
var router = express.Router();
import fetch from 'node-fetch';
import main_constant from '../helpers/constants/main_constant.js';
/* GET home page. */
router.get('/:slug', async function(req, res, next) {
  let products=await fetch(main_constant.api_url+`/products/slug=${req.params.slug}`,)
  console.log("products",products)
  // products=await products.json()
  res.render('single_product', { title: 'Express' });
});

export default router;
