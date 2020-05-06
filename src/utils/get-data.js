const fetchJSON = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

async function getSchema() {
  const schema = await fetchJSON(
    'https://raw.githubusercontent.com/odileeds/emer2gent-data/master/schemas/subindex-v1.0.json'
  );
  return schema;
}

async function getIndex() {
  const rootIndex = await fetchJSON(
    'https://raw.githubusercontent.com/odileeds/emer2gent-data/master/index.json'
  );
  let output = {};
  for (const [key, meta] of Object.entries(rootIndex)) {
    const { index } = meta;
    const indexData = await fetchJSON(index);
    output[key] = meta;
    output[key]['version'] = indexData.version;
    output[key]['datasets'] = indexData.datasets;
  }
  return output;
}
/* Essentially takes the root index and returns the same structure but adding the 'version' and 'dataset' properties from the sub-indexes
  Example:
    {
      'odi-leeds': {
        author: 'ODI Leeds',
        url: 'https://odileeds.org/projects/covid-19/',
        index: 'https://odileeds.github.io/covid-19/index.json',
        description: 'Data resources and visualisations collated by ODI Leeds',
        version: "1.0"
        datasets: []
      }
    }
See schema - https://github.com/odileeds/emer2gent-data/blob/master/schemas/subindex-v1.0.json
*/
export { getIndex, getSchema };
