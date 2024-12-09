const mongoose = require('mongoose');

async function connectToDB() {
    try {
        await mongoose.connect("mongodb+srv://Uber-clone:rakeshlovescharu@cluster0.tpmet.mongodb.net/");
        console.log("Mongoose Connected Successfully");
    } catch (err) {
        console.error('Mongoose Connection Failed:', err);
        throw err;
    }
}

const LoginSchema = new mongoose.Schema({
    username: { // Match field name with usage in `findOne`
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const User = mongoose.model('User', LoginSchema);

module.exports = { connectToDB, User };
