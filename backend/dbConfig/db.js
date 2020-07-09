const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
         useNewUrlParser:true,
         useCreateIndex:true,
         useUnifiedTopology:true   
        });

        console.log(`MongoDB Connection : ${conn.connection.host}`.cyan.underline.bold)
    }catch(err){
        console.log(`Error : ${err.message}`.blue.bold)
        process.exit(1)
    }
}

module.exports = connectDB;