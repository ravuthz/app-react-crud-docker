// post-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const post = new Schema({
    title : {
      type: String,
      required: [true, 'Title is required']
    },
    content : {
      type: String,
      required: [true, 'Content is required']
    },
    createdAt: { type: Date, 'default': Date.now },
    updatedAt: { type: Date, 'default': Date.now }
  }, {
    timestamps: true
  });

  return mongooseClient.model('post', post);
};
