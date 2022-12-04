import express from 'express'
import { registerHelpers } from '../helpers/constants/main_constant';
var router = express.Router();

/* GET home page. */
router.get('/',async  function(req, res, next) {
  const helpers=await registerHelpers()
  res.render('contact', { title: 'Express',...helpers });
});

export default router;
