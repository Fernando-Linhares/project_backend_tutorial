import mongoose from "mongoose";

async function connection() {

    try {

        process.env.CONNECTED = false;

        await mongoose.connect(process.env.DATABASE_URL);

        process.env.CONNECTED = true;

    } catch (error) {
        console.error(error);
    }
}

export default connection;