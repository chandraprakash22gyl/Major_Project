// const express = require("express")


// const app  =express()
// const cors = require("cors")
// const morgan = require("morgan")
// const ApiError = require("./utils/ApiError")
// const ErrorHandling = require("./middlewares/ErrorHandler")
// app.use(cors())
// app.use(morgan("dev"))
// app.use(express.json({limit:'10mb'}))
// app.use(express.urlencoded({extended:false}))

// app.use("/api/v1",require("./routes"))

// // app.use("*",(req,res)=>{
// //     throw new ApiError(404,"page not found")
// // })
// app.use("*", (req, res, next) => {
//     next(new ApiError(404, "page not found"));
// });

// app.use(ErrorHandling)
// module.exports  =app

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const ApiError = require("./utils/ApiError");
const ErrorHandling = require("./middlewares/ErrorHandler");

const app = express();

app.use(cors({ 
  origin:'http://localhost:5173'
}));
app.use(morgan("dev"));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome! Server is running.");
});

app.use("/api/v1", require("./routes"));
app.get("/", (req, res) => {
  res.send("Hello! Server is running.");
});

// catch all unhandled routes and forward to error handler
// app.use("*", (req, res, next) => {
//   next(new ApiError(404, "page not found"));
// });

// error handler middleware - must have 4 params
app.use(ErrorHandling);

module.exports = app;
