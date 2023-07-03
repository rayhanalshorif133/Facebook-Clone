export default function responseWithError(res, data = [], message = 'Something went wrong') {
    res.status(200).json({
        data: data,
        message: message,
        status: false,
        code: 400,
    });
}