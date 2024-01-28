"use strict";

const author = require("../services/author");

/**
 * author controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::author.author", {
  async find(ctx) {
    try {
      const authors = await strapi.entityService.findMany(
        "api::author.author",
        {
          populate: {
            books: {
              fields: ["name", "description", "cover"],
              sort: { rating: "desc" },
              limit: 4,
            },
          },
        }
      );
      return authors;
    } catch (error) {
      console.error(error);
      ctx.badRequest(error);
    }
  },
});
