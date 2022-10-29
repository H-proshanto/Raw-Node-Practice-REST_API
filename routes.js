/*
 * Title: Routes
 * Description: Application Routes
 * Author: Proshanto Lal
 * Date: 29 / 10 / 2022
 *
 */

// Dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
