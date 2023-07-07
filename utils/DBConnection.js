import mongoose from 'mongoose';

// Connect to MongoDB
const DBConnection = async () => {
    // const URL = prosess.env.NEXT_PUBLIC_MONGO_URI || 'mongodb://127.0.0.1:27017/facebook';
    const URL = 'mongodb+srv://rayhanalshoriffacebookclone:rayhanalshoriffacebookclone@cluster0.xviapgc.mongodb.net/facebook?retryWrites=true&w=majority' || 'mongodb://127.0.0.1:27017/facebook';
   await mongoose.connect(URL);
    console.log('Database connection established ...!!!');
};

export default DBConnection;
