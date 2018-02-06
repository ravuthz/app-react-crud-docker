// Initializes the `post` service on path `/posts`
const createService = require('feathers-mongoose');
const createModel = require('../../models/post.model');
const hooks = require('./post.hooks');
const filters = require('./post.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'post',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/posts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('posts');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
