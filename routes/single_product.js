import express from 'express'
var router = express.Router();
import fetch from 'node-fetch';
import main_constant from '../helpers/constants/main_constant.js';
/* GET home page. */
router.get('/:slug', async function(req, res, next) {
  let products=await fetch(main_constant.api_url+`/products/slug=${req.params.slug}`,)
  products=await products.json()
  const slug=req.params.slug
  const product=products.find(product=>product.slug===slug)
  if(!product){
    res.redirect("/contact")
    return
  }
  console.log("product",product)
  const otherProducts=products.filter(p=>p._id!==product._id)
  res.render('single_product', { product,otherProducts });
});

export default router;
