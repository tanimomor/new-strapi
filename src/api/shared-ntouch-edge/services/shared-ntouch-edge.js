'use strict';

/**
 * shared-ntouch-edge service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shared-ntouch-edge.shared-ntouch-edge');
