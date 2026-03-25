require("dotenv").config();

console.log("dotenv loaded MONGO_URL =", process.env.MONGO_URL);

const MONGO_URL = process.env.MONGO_URL || undefined;
const REDIS_URL = process.env.REDIS_URL || undefined;

module.exports = {
  MONGO_URL,
  REDIS_URL,
};
