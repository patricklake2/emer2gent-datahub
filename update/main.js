const updateDatasets = require('./lib/datasets');
const updateTopics = require('./lib/topics')

Promise.all([
  updateDatasets(),
  updateTopics(),
])

