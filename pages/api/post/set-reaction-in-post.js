export default function Index(req,res) {
    console.log(req.body);

    res.status(200).json({
        message: 'Hello World'
    });
}