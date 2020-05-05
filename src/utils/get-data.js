const fetchJSON = async url => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default async function getIndex() {
  const rootIndex = await fetchJSON(
    'https://raw.githubusercontent.com/odileeds/emer2gent-data/master/index.json'
  );
  let output = {};
  for (const [key, meta] of Object.entries(rootIndex)) {
    const { index } = meta;
    const indexData = await fetchJSON(index);
    output[key] = meta;
    output[key]['indexData'] = indexData;
  }
  return output;
}
/* Returns an object in the same structure as the root index, but with an extra 'indexData' field containing the subindex for each entry
  Example:
    {
      'odi-leeds': {
        author: 'ODI Leeds',
        url: 'https://odileeds.org/projects/covid-19/',
        index: 'https://odileeds.github.io/covid-19/index.json',
        description: 'Data resources and visualisations collated by ODI Leeds',
        indexData: { version: '1.0', datasets: [array of datasets] }
      }
    }
See schema for 'indexData' - https://github.com/odileeds/emer2gent-data/blob/master/schemas/subindex-v1.0.json
*/
