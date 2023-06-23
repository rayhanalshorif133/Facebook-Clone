import { db } from "@/database/mongodb";
import mongoose from 'mongoose';
const Schema = mongoose.Schema;


export default function handler(req, res) {


 postDb.Post.insertMany([
  { title: 'post1', des: 'des1' },
  { title: 'post2', des: 'des2' },
  { title: 'post3', des: 'des3' }
 ]).then((result) => {
  res.status(200).json({ message: 'Posts added successfully' })
 }).catch((err) => {
  res.status(500).json({ message: 'Error adding posts', error: err })
 });

 db.User.insertMany([
  { username: 'user1', hash: 'hash1', firstName: 'first1', lastName: 'last1' },
  { username: 'user2', hash: 'hash2', firstName: 'first2', lastName: 'last2' },
  { username: 'user3', hash: 'hash3', firstName: 'first3', lastName: 'last3' }
 ]).then((result) => {
  res.status(200).json({ message: 'Users added successfully' })
 }).catch((err) => {
  res.status(500).json({ message: 'Error adding users', error: err })
 });


}

export const postDb = {
 Post: posts()
};

function posts() {
 const schema = new Schema({
  title: { type: String, unique: true, required: true },
  des: { type: String, required: true }
 }, {
  // add createdAt and updatedAt timestamps
  timestamps: true
 });

 return mongoose.models.Post || mongoose.model('Post', schema);
}