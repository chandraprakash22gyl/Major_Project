// process.on("uncaughtException", (err) => {
//   console.error("Uncaught Exception:", err);
//   process.exit(1);
// });

// process.on("unhandledRejection", (reason, promise) => {
//   console.error("Unhandled Rejection:", reason);
//   process.exit(1);
// });



require("dotenv").config({

})
const { PUBLIC_DATA } = require("./constant");
const app = require("./src/app"); 
const { ConnectDB } = require("./src/config/db.config");
ConnectDB()





app.listen(PUBLIC_DATA.port,()=>{
    console.log(`the app is listen at http://localhost:${PUBLIC_DATA.port}`);
})


// --views