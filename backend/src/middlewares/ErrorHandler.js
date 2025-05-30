// const ApiError = require("../utils/ApiError")

// const ErrorHandling = (err,req,res,next)=>{
//     const obj ={}
//     if(err instanceof ApiError){
//                 obj['statusCode'] = err.statusCode
//                 obj['message'] = err.message
//                 obj['stack'] = err.stack


//     }else{
//         obj['statusCode'] = 400
//         obj['message'] = err.message
//         obj['stack'] = err.stack
//     }

//     res.status(obj.statusCode).json(obj)
// }

// module.exports =ErrorHandling

const ApiError = require("../utils/ApiError");

const ErrorHandling = (err, req, res, next) => {
  console.error("Error caught by middleware:", err);

  const obj = {};

  if (err instanceof ApiError) {
    obj.statusCode = err.statusCode;
    obj.message = err.message;
    obj.stack = err.stack;
  } else {
    obj.statusCode = 500; // Use 500 for unexpected errors (not 400)
    obj.message = err.message || "Internal Server Error";
    obj.stack = err.stack;
  }

  res.status(obj.statusCode).json(obj);
};

module.exports = ErrorHandling;
