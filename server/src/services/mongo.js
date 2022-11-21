const mongoose = require('mongoose');

require('dotenv').config();


const MONGO_URL = process.env.MONGO_URL;

mongoose.connection.once('open', () => {
    console.log('MongoDB connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function mongoConnect() {
    await mongoose.connect('mongodb+srv://congtuyen2032001:congtuyen2032001@cluster0.vkji1jb.mongodb.net/?retryWrites=true&w=majority');
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect,
}