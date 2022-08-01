import mongoose from "mongoose";

let connected: any;

export const connectToDatabase = () => {
    if (connected) {
        return Promise.resolve();
    }

    return mongoose.connect('mongodb://localhost:27017/library').then(db => {
        connected = db.connections[0].readyState;
    });
};

export const disconnectDatabase = async () => {
    for (const connection of mongoose.connections) {
        await connection.close();
    }
    connected = false;
};
