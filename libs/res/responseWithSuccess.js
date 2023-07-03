export default function responseWithSuccess(res, data = [], message = 'Data successfully fetched') {
    res.status(200).json({
        data: data,
        message: message,
        status: true,
        code: 200,
    });
}