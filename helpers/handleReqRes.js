/*
 * Title: Handle Request Response
 * Description: Handle Request & Response
 * Author: Proshanto Lal
 * Date: 29 / 10 / 2022
 *
 */
// Dependencies
const { StringDecoder } = require('string_decoder');
const url = require('url');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

// module scaffholding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get path URL and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) => {
        realData = decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        console.log(realData);
        // response handle
        res.end('Hello Proshanto Lal');
    });
};
module.exports = handler;
