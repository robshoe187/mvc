const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I cannot believe this is happening!',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Finally Windows 11 is here',
    user_id: 1,
    post_id: 1
  },
  
  {
    comment_text: 'Wow its about time for Windows 11',
    user_id: 2,
    post_id: 1
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
