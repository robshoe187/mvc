const { Post } = require('../models');

const postdata = [
  {
    title: 'Windows 11 ',
    post_url: 'https://www.cnet.com/tech/computing/windows-11-release-date-sounds-like-itll-be-sooner-than-we-first-thought/',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
