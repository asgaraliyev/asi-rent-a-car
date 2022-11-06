var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const hbs = require("express-handlebars");

var indexRouter = require("./routes/index");
var singleProductRouter = require("./routes/single_product");
var contactRouter = require("./routes/contact");
var usersRouter = require("./routes/users");

var app = express();
app.engine(
  "hbs",
  hbs.engine({
    extname: "hbs",
    defaultLayout: "main",
    layoutDir: path.join(__dirname + "/views/layouts"),
    partialsDir: path.join(__dirname + "/views/partials"),
  })
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/index", indexRouter);
app.use("/single-product", singleProductRouter);
app.use("/contact", contactRouter);
app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});
const PORT = 3131 || process.env.PORT;
app.listen(PORT, () => {
  console.log("running on http://localhost:" + PORT);
});
module.exports = app;
