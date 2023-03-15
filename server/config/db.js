const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(
    `MONGODB Connected: ${conn.connection.host}`.bgCyan.underline.bold
  );
};

module.exports = connectDB;
