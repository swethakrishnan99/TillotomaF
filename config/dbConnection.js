const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/portal';

const connectDB = async () => {
    try {
        await mongoose.connect(url)
    }
    catch (error) {
        console.error(error)
    }
}

module.exports = connectDB



