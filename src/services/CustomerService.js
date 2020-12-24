
const baseUrlCustomer = 'https://app-restexample.herokuapp.com/rest/customers';

export function getCustomers() {
  return fetch(baseUrlCustomer)
    .then(data => data.json())
}

export function deleteCustomer(id) {
  return fetch(baseUrlCustomer + "/" + id, {
    method: 'DELETE'
  }).then(data => data.text());
}
