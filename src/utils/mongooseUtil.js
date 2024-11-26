import mongoose from "mongoose";
import logger from '../utils/loggerUtil.js';


const PORT = process.env.DB_PORT || 27017;
const SERVER = process.env.DB_SERVER || "127.0.0.1";

export default function connectDB() {
    const url = `mongodb://${SERVER}:${PORT}`;
    logger.info(`Trying connect to database: ${url}`);

    mongoose.connect(url);
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
        logger.info(`Database connected: ${url}`);
    });

    dbConnection.on("error", (err) => {
        logger.error(`connection error: ${err}`);
    });
    return;
}
