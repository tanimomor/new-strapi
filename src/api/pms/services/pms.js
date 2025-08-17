'use strict';

/**
 * pms service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pms.pms');
