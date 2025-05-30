// class PUBLIC_DATA{

//     static port = process.env.PORT || 4000 
//     static mongo_uri = process.env.MONGO_URI || `mongodb://localhost/inventry` 
//     static jwt_auth = process.env.JWT_AUTH || "@#$%^&*(@#$%^&*($%^))#$%^&"

// }

// module.exports = {
//     PUBLIC_DATA
// }

// const PUBLIC_DATA = {
//   port: process.env.PORT || 4000,
//   mongo_uri: process.env.MONGO_URI || 'mongodb://localhost/inventry',
//   jwt_auth: process.env.JWT_AUTH || '@#$%^&*(@#$%^&*($%^))#$%^&',
// };


const PUBLIC_DATA = {
  port:  8000,
  mongo_uri: 'mongodb+srv://goyalchandraprakash8:e6pRlJYml7D1Bqs6@cluster0.hh41wpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
  jwt_auth: '@#$%^&*(@#$%^&*($%^))#$%^&',
};
module.exports = { PUBLIC_DATA };
// e6pRlJYml7D1Bqs6