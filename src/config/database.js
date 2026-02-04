const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to Database");
  }).catch((err) => {
    console.log("Error while connecting to DB:", err)
  })
}

module.exports = connectDB