export default async function submitForm(formData) {
  const endpoint = 'https://enu6y93k0xccf9v.m.pipedream.net';
  const body = JSON.stringify(formData);
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const config = {
    method: 'POST',
    headers,
    mode: 'cors',
    body,
  };
  const response = await fetch(endpoint, config);
  return response.status;
}
