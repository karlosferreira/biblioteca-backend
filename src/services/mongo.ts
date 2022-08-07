import mongoose from "mongoose";

let connected: any;

export const connect = async () => {
    if (connected) {
        return Promise.resolve();
    }

    return mongoose.connect('mongodb+srv://library:vercel@library.yopr3zi.mongodb.net/?retryWrites=true&w=majority', { 
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
