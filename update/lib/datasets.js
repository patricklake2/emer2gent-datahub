const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const axios = require('axios');
const existing = require('../../_data/allDatasets.json');

module.exports = async function updateDatasets() {
  const data = await getIndexes();
  if(JSON.stringify(data) != JSON.stringify(existing)) {
    await Promise.all([
      saveRawData(data),
      createCataloguePages(data),
    ])
  }
}

async function getIndexes() {
  const response = await axios.get(
    'https://raw.githubusercontent.com/odileeds/emer2gent-data/master/index.json'
  );
  const rootIndex = response.data;
  let output = {};
  for (const [key, meta] of Object.entries(rootIndex)) {
    const { index } = meta;
    const resp = await axios.get(index);
    const indexData = resp.data;
    output[key] = meta;
    output[key]['version'] = indexData.version;
    output[key]['datasets'] = indexData.datasets;
  }
  return output;
}

async function saveRawData(data) {
  const fp = path.join(__dirname, '../../_data/allDatasets.json');
  await fs.promises.writeFile(fp, JSON.stringify(data));
}

async function createCataloguePages(catalogue) {
  const dir = path.join(__dirname, '../../catalogue')
  await fs.promises.rmdir(dir, { recursive: true });
  await fs.promises.mkdir(dir);
  const indexFile = '---\nlayout: default\ntitle: Emergent | Catalogue\n---\n<div class="holder">\n{% include organisations.html %}\n{% include catalogue.html %}\n</div>';
  await fs.promises.writeFile(path.join(dir, 'index.html'), indexFile);
  await Promise.all(Object.entries(catalogue).map(createOrg));
}

async function createOrg([key, data]) {
  const dir = path.join(__dirname, `../../catalogue/${key}`);
  await fs.promises.mkdir(dir);
  const indexFile = `---\nlayout: default\ntitle: ${data.author}\n---\n<div class="holder">\n{% include catalogue.html org="${key}" %}\n</div>`
  await fs.promises.writeFile(path.join(dir, 'index.html'), indexFile);
  await Promise.all(data.datasets.map(async dataset => {
    const pageData = { data: dataset }
    const page = `---\nlayout: dataset\ntitle: Catalogue | ${dataset.id}\n${yaml.safeDump(pageData)}\n---`;
    await fs.promises.writeFile(path.join(dir, `${dataset.id}.md`), page);
  }));
}