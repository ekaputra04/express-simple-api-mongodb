// module.exports = {
//   url: "mongodb://localhost:27017/express_api",
// };

const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  url: process.env.DATABASE_URL, // Accessing value of DATABASE_URL from .env
};
