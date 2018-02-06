// Application hooks that run for every service
const logger = require('./hooks/logger');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ logger() ],
    find: [
      (context) => {
        
        context.result.pager = {
          skip: context.result.skip,
          limit: context.result.limit,
          total: context.result.total
        };
        console.log("after find context: ", context.result.pager);
        
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [ logger() ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
