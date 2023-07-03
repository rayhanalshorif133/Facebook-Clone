import mongoose from 'mongoose';

// Connect to MongoDB
const DBConnection = async () => {
   await mongoose.connect('mongodb://127.0.0.1:27017/facebook');
    console.log('Database connection established ...!!!');
};

export default DBConnection;
