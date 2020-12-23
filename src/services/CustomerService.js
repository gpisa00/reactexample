
export function getCustomers() {
    return fetch('https://app-restexample.herokuapp.com/rest/customers')
      .then(data => data.json().content)
}