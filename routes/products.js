import express from "express";
var router = express.Router();
import fetch from "node-fetch";
import main_constant, {
  registerHelpers,
} from "../helpers/constants/main_constant.js";
/* GET home page. */
router.get("/", async function (req, res, next) {
  let products = await fetch(main_constant.api_url + `/products`);
  products = await products.json();
  const helpers = await registerHelpers();
  console.log(products)
  res.render("products", {
    products,
    ...helpers,
  });
});

export default router;
