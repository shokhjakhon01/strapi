"use strict";

/**
 * book controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::book.book", ({ strapi }) => ({
  async getTop10Books(ctx, res) {
    try {
      const booksTop = await strapi.entityService.findMany("api::book.book", {
        sort: { rating: "desc" },
        limit: 10,
      });
      return booksTop;
    } catch (error) {
      console.error(error);
      ctx.badRequest(error);
    }
  },
  find: async (ctx, res) => {
    try {
      const books = await strapi.entityService.findMany("api::book.book", {
        populate: {
          Author: {
            fields: [
              "id",
              "first_name",
              "last_name",
              "photo",
              "date_of_birth",
              "date_of_death",
            ],
          },
          reviews: {
            fields: ["comment_body", "rating"],
          },
        },
      });
      return books;
    } catch (error) {
      console.error(error);
      ctx.badRequest(error);
    }
  },
  async review(ctx, res) {
    try {
      const reviewData = ctx.request.body;
      let { id } = ctx.params;
      const existingBook = await strapi.entityService.findOne(
        "api::book.book",
        id
      );
      if (!existingBook) {
        return ctx.badRequest("book does not exist");
      }

      console.log({ data: { ...reviewData.data, book: existingBook.id } });

      const review = await strapi.entityService.create("api::review.review", {
        data: { ...reviewData.data, book: existingBook.id },
      });
      return review;
    } catch (error) {
      console.error(error);
      ctx.badRequest(error);
    }
  },
}));
