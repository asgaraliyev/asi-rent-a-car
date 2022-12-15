import express from "express"
import  createError from "http-errors"

import path from "path"
import cookieParser from "cookie-parser"
import logger from "morgan"
import hbs from "express-handlebars"
import indexRouter from "./routes/index.js"
import productsRouter from "./routes/products.js"
import singleProductRouter from "./routes/single_product.js"
// import contactRouter  from "./routes/contact.js"
import { dirname } from 'path';
import { registerHelpers } from "./helpers/constants/main_constant.js"



function getPath(dir){
  if(dir){
    return path.resolve(dirname(`./`),`${dir}`)
  }else path.resolve(dirname(`./`),``)
}
var app = express();
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutDir: path.join(getPath("views/layouts")),
    partialsDir: path.join(getPath("views/partials")),
    
  })
);
app.set("views",getPath("views"));
app.set("view engine", "hbs");

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(getPath("public")));

app.use("/", indexRouter);
app.use("/index", indexRouter);
app.use("/products", productsRouter);
app.use("/single-product", singleProductRouter);
// app.use("/contact", contactRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(async function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  const helpers=await registerHelpers()
  res.render("error",{...helpers});
});
const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log(process.env)
  console.log("ENV PORT",process.env.PORT)
  console.log("api_url",process.env.api_url)
  console.log("NODE_ENV",process.env.NODE_ENV)
  console.log("running on http://localhost:" + PORT);
});
export default app;
