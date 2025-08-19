'use strict';

/**
 * guest-experience service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::guest-experience.guest-experience');
