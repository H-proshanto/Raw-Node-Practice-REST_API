/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Proshanto Lal
 * Date: 29 / 10 / 2022
 *
 */
// module scaffholding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample response',
    });
};

module.exports = handler;
