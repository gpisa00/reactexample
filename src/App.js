import React, { useState, useEffect } from 'react';
import Widget from './components/Widget';
import { customerColumns } from './Constants';
import axios from 'axios';

const baseUrlCustomer = 'https://app-restexample.herokuapp.com/rest/customers';

function App() {

  const [customers, setCustomers] = useState([]);
  const [customerEditIndex, setCustomerEditIndex] = useState(-1);
  const [customerInputs, setCustomerInputs] = useState([
    { name: 'firstName', label: 'First Name', valueInput: '' },
    { name: 'lastName', label: 'Last Name', valueInput: '' },
    { name: 'organization', label: 'Organization', valueInput: '' }
  ])

  useEffect(() => {
    axios.get(baseUrlCustomer)
      .then(response => {
        setCustomers(response.data.content);
      }).catch(error => {
        alert(error.response.data.message);
      })
  }, []);

  const handleCustomerRemove = index => {
    axios.delete(baseUrlCustomer + "/" + customers[index].id)
      .then(response => {
        if (response.status === 200) {
          const newCustomers = customers.filter(((row, j) => j !== index));
          setCustomers(newCustomers);
        }
      }).catch(error => {
        alert(error.response.data.message);
      })
  };

  const startCustomerEditing = index => {
    setCustomerEditIndex(index);
  };

  const stopCustomerEditing = index => {
    axios.put(baseUrlCustomer, customers[index])
      .then(response => {
        const updateCustomers = customers.map(
          (row, j) => j !== index ? row : response.data
        );
        setCustomers(updateCustomers);
        setCustomerEditIndex(-1);
      }).catch(error => {
        alert(error.response.data.message);
      })
  };

  const handleCustomerEditing = (event, field, index) => {
    const { value } = event.target;
    setCustomers(customers.map(
      (row, j) => (j === index ? { ...row, [field]: value } : row)
    ));
  };

  const handleCustomerInputsEditing = (event, index) => {
    const { value } = event.target;
    setCustomerInputs(customerInputs.map(
      (row, j) => (j === index ? { ...row, valueInput: value } : row)
    ));

  }

  const saveCustomer = () => {
    let customer = {};
    const newCustomerInputs = customerInputs.map(
      (row) => {
        customer[row.name] = row.valueInput;
        row.valueInput = '';
        return row;
      }
    );

    axios.post(baseUrlCustomer, customer)
      .then(response => {
        const newCustomers = [...customers, response.data];
        setCustomers(newCustomers);
        setCustomerInputs(newCustomerInputs);
      }).catch(error => {
        alert(error.response.data.message);
      })
  }

  return (
    <div className="App">
      <Widget
        title="Customers"
        data={customers}
        columns={customerColumns}
        inputs={customerInputs}
        handleInputsEditing={handleCustomerInputsEditing}
        editIndex={customerEditIndex}
        startEditing={startCustomerEditing}
        stopEditing={stopCustomerEditing}
        handleRemove={handleCustomerRemove}
        handleEditing={handleCustomerEditing}
        save={saveCustomer}
      />

    </div>
  );
}

export default App;
