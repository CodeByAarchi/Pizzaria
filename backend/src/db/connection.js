const mongoose = require("mongoose");
const DATABASE_NAME = require("../../constants");
const ConnectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`);
        console.log(`MongoDB connected successfully!! DB HOST:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1);
    }
}

module.exports = ConnectDB;
