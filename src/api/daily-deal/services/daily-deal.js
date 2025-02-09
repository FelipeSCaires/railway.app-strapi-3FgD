'use strict';

/**
 * daily-deal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::daily-deal.daily-deal');
