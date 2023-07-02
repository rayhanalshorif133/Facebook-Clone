import Test from '@/models/Test';
import User from '@/models/User';
import mongoose from 'mongoose';


export default async function  handler(req, res) {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI);
        const data = await Test.create({name: 'test'});
        res.status(200).json({
            data: data,
            message: 'connected to db',
            MONGODB_URI: process.env.MONGODB_URI
        });
    }
    catch (error) {
        res.status(500).json({ 
            data: null,
            message: 'error connecting to db' ,
            error: error
        });
    }
}  
