import React, { useState, useEffect } from 'react';
import Widget from './components/Widget';
import { customerColumns, customerInputs } from './Constants';
import axios from 'axios';

const baseUrlCustomer = 'https://app-restexample.herokuapp.com/rest/customers';

function App() {

  const [customers, setCustomers] = useState([]);
  const [customerEditIndex, setCustomerEditIndex] = useState(-1);

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
        const newCustomers = customers.filter(((row, j) => j !== index));
        newCustomers[index] = response.data;
        setCustomers(newCustomers);
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


  return (
    <div className="App">
      <Widget
        title="Customers"
        data={customers}
        columns={customerColumns}
        inputs={customerInputs}
        editIndex={customerEditIndex}
        startEditing={startCustomerEditing}
        stopEditing={stopCustomerEditing}
        handleRemove={handleCustomerRemove}
        handleEditing={handleCustomerEditing}
      />

    </div>
  );
}

export default App;
