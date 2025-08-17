'use strict';

/**
 * calculate-price service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::calculate-price.calculate-price');
