const contact = require('./contact/contact.service.js');
const post = require('./post/post.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(contact);
  app.configure(post);
};
