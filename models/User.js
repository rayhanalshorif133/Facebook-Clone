import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
 name: { type: String, required: true },
 email: { type: String, required: true, unique: true },
 image: { type: String, required: true },
 activeStatus: { type: Boolean, default: false },
}, {
 // add createdAt and updatedAt timestamps
 timestamps: true
});


const User = mongoose.models?.User || mongoose.model('User', userSchema);

export default User;
