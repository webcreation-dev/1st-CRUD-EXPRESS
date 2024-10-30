const mongoose = require('mongoose');

const connectDatabase = async () => {
    try {
        mongoose.set('strictQuery', false); // Optional: To disable strict query warnings

        // Use `await` to properly handle the promise
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Ensure the process exits with an error code
    }
};

module.exports = { connectDatabase };
