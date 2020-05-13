const axios = require('axios');
const fs = require('fs');
const path = require('path');
const existing = require('../../_data/topics.json');

module.exports = async function updateTopics() {
  const response = await axios.get('https://raw.githubusercontent.com/odileeds/emer2gent-data/master/topics.json');
  const data = response.data;
  if(JSON.stringify(existing) != JSON.stringify(data)) {
    const fp = path.join(__dirname, '../../_data/topics.json');
    await fs.promises.writeFile(fp, JSON.stringify(data));
  }
}