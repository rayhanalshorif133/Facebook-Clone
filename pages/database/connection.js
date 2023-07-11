import mongoose from 'mongoose';

// Connect to MongoDB
const main = async () => {
    const URL = 'mongodb://127.0.0.1:27017/facebook';
    // const URL = 'mongodb+srv://rayhanalshoriffacebookclone:rayhanalshoriffacebookclone@cluster0.xviapgc.mongodb.net/facebook?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/facebook';
   await mongoose.connect(URL);
    console.log('Database connection established ...!!!');
};

export default main;
