import { db } from "@/database/mongodb";


export default function handler(req, res) {
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