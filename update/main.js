const updateDatasets = require('./lib/datasets');
const updateTopics = require('./lib/topics');
const updateChallenges = require('./lib/challenges');

Promise.all([
  updateDatasets(),
  updateTopics(),
  updateChallenges(),
]);

