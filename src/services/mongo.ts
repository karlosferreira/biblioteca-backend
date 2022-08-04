import mongoose from "mongoose";

let connected: any;

export const connect = async () => {
    if (connected) {
        return Promise.resolve();
    }

    return mongoose.connect('mongodb://localhost:27017/library', { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(db => {
        connected = db.connections[0].readyState;
    });
};

export const disconnect = async () => {
    for (const connection of mongoose.connections) {
        await connection.close();
    }
    connected = false;
};
