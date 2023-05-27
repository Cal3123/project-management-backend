const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect( process.env.MONGO_URI, { useNewUrlParser: true });
    console.log("MongoDB successfully connected ")
    //conn.on("error", (error) => console.error(error));
    //conn.once("open", () => console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold));
    //console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);    
  } catch (error) {
    console.log(error)
  }
}
module.exports = connectDB;
