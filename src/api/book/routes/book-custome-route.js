module.exports = {
  routes: [
    {
      method: "GET",
      path: "/books/topbooks",
      handler: "book.getTop10Books",
    },
    {
      method: "POST",
      path: "/books/:id/review",
      handler: "book.review",
    },
  ],
};
