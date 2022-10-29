/*
 * Title: Not Found Handler
 * Description: 404 Not Found Handler
 * Author: Proshanto Lal
 * Date: 29 / 10 / 2022
 *
 */
// module scaffholding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found!',
    });
};

module.exports = handler;
