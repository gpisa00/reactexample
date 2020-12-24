
export function getCustomers() {
  return fetch('http://app-restexample.herokuapp.com/rest/customers')
    .then(data => data.json())
}

