'use strict';

/**
 * shared-faq service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shared-faq.shared-faq');
