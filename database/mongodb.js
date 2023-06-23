import mongoose from 'mongoose';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString);
mongoose.Promise = global.Promise;

export const db = {
 User: userModel()
};

// mongoose models with schema definitions

function userModel() {
 const schema = new Schema({
  username: { type: String, unique: true, required: true },
  hash: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true }
 }, {
  // add createdAt and updatedAt timestamps
  timestamps: true
 });

 return mongoose.models.User || mongoose.model('User', schema);
}