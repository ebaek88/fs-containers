const mongoose = require("mongoose");
const Todo = require("./models/Todo");
const { MONGO_URL } = require("../util/config");

if (MONGO_URL && !mongoose.connection.readyState) {
  console.log("Connecting to Mongo:", MONGO_URL);
  mongoose
    .connect(MONGO_URL)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error.message);
    });
}

module.exports = {
  Todo,
};
