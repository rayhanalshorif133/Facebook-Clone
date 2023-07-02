import connectMongo from '@/utils/dbConfig';



/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */
export default async function userAPI(req, res) {
    try {
        console.log('CONNECTING TO MONGO');
        await connectMongo();
        console.log('CONNECTED TO MONGO');    
      } catch (error) {
        console.log(error);
        res.json({ error });
      }
}