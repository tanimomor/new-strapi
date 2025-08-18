'use strict';

/**
 * shared-navbar service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shared-navbar.shared-navbar');
