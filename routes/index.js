import express from 'express'
import fetch from 'node-fetch';
const indexRouter = express.Router();

import categories_constants from "../helpers/constants/categories_constant.js"
import home_slider_constants from "../helpers/constants/home_slider_constant.js"
import main_constant from "../helpers/constants/main_constant.js"
indexRouter.get('/', async function(req, res, next) {
  const url=main_constant.api_url+"/products"
  let products=await fetch(url)
  products=await products.json()
  res.render('index', { categories_constants,home_slider_constants,products });
});

export default indexRouter