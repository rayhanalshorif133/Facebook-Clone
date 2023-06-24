import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const schema = new Schema({
 name: { type: String, required: true },
 email: { type: String, required: true, unique: true },
 image: { type: String, required: true },
 status: { type: String, required: true, default: 'active' },
}, {
 // add createdAt and updatedAt timestamps
 timestamps: true
});


// export the mongoose model
export default mongoose.models.User || mongoose.model('User', schema);
