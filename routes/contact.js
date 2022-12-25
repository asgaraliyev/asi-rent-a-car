import express from "express";
const indexRouter = express.Router();

import  {
  registerHelpers,
} from "../helpers/constants/main_constant.js";
indexRouter.get("/", async function (req, res, next) {
  const helpers=await registerHelpers()
  res.render('contact', { title: 'Express',...helpers });
});

export default indexRouter;
