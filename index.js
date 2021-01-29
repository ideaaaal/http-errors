class HttpError {
    constructor(code, message) {
        this.code = code;
        this.message = message;
    }
}

const allHttpErrors = [
    new HttpError(100, 'Continue'),
    new HttpError(101, 'Switching Protocols'),
    new HttpError(102, 'Processing'),
    new HttpError(103, 'Checkpoint'),
    new HttpError(200, 'OK'),
    new HttpError(201, 'Created'),
    new HttpError(202, 'Accepted'),
    new HttpError(203, 'Non-Authoritative Information'),
    new HttpError(204, 'No Content'),
    new HttpError(205, 'Reset Content'),
    new HttpError(206, 'Partial Content'),
    new HttpError(207, 'Multi-Status'),
    new HttpError(300, 'Multiple Choices'),
    new HttpError(301, 'Moved Permanently'),
    new HttpError(302, 'Found'),
    new HttpError(303, 'See Other'),
    new HttpError(304, 'Not Modified'),
    new HttpError(305, 'Use Proxy'),
    new HttpError(306, 'Switch Proxy'),
    new HttpError(307, 'Temporary Redirect'),
    new HttpError(400, 'Bad Request'),
    new HttpError(401, 'Unauthorized'),
    new HttpError(402, 'Payment Required'),
    new HttpError(403, 'Forbidden'),
    new HttpError(404, 'Not Found'),
    new HttpError(405, 'Method Not Allowed'),
    new HttpError(406, 'Not Acceptable'),
    new HttpError(407, 'Proxy Authentication Required'),
    new HttpError(408, 'Request Timeout'),
    new HttpError(409, 'Conflict'),
    new HttpError(410, 'Gone'),
    new HttpError(411, 'Length Required'),
    new HttpError(412, 'Precondition Failed'),
    new HttpError(413, 'Request Entity Too Large'),
    new HttpError(414, 'Request-URI Too Long'),
    new HttpError(415, 'Unsupported Media Type'),
    new HttpError(416, 'Requested Range Not Satisfiable'),
    new HttpError(417, 'Expectation Failed'),
    new HttpError(418, 'I\'m a teapot'),
    new HttpError(422, 'Unprocessable Entity'),
    new HttpError(423, 'Locked'),
    new HttpError(424, 'Failed Dependency'),
    new HttpError(425, 'Unordered Collection'),
    new HttpError(426, 'Upgrade Required'),
    new HttpError(449, 'Retry With'),
    new HttpError(450, 'Blocked by Windows Parental Controls'),
    new HttpError(500, 'Internal Server Error'),
    new HttpError(501, 'Not Implemented'),
    new HttpError(502, 'Bad Gateway'),
    new HttpError(503, 'Service Unavailable'),
    new HttpError(504, 'Gateway Timeout'),
    new HttpError(505, 'HTTP Version Not Supported'),
    new HttpError(506, 'Variant Also Negotiates'),
    new HttpError(507, 'Insufficient Storage'),
    new HttpError(509, 'Bandwidth Limit Exceeded'),
    new HttpError(510, 'Not Extended')
];


exports.allHttpErrors = allHttpErrors;
exports.getByCode = code => allHttpErrors.find(error => Number(error.code) === Number(code));