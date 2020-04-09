"use strict";
module.exports = (factory, Models) => {
  factory.define("Author", Models.Author, {
    firstName: "Kalle",
    lastName: "Karlsson",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
