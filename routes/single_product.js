import express from "express";
var router = express.Router();
import fetch from "node-fetch";
import main_constant, { registerHelpers } from "../helpers/constants/main_constant.js";
/* GET home page. */
router.get("/:slug", async function (req, res, next) {
  let products = await fetch(main_constant.api_url + `/products`);
  products = await products.json();
  const slug = req.params.slug;
  const product = products.find((product) => product.slug === slug);
  if (!product) {
    res.redirect("/contact");
    return;
  }

  const otherProducts = products.filter((p) => p._id !== product._id);
  const helpers=await registerHelpers()
  res.render("single_product", {
    product,
    ...helpers,
    otherProducts,
  });
});

export default router;
