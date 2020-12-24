import React, { useState, useEffect } from 'react';
import { getCustomers, deleteCustomer } from './services/CustomerService';
import Widget from './components/Widget';
import { customerColumns, customerInputs } from './Constants';


function App() {

  const [customers, setCustomers] = useState([]);
  const [customerEditIndex, setCustomerEditIndex] = useState(-1);

  useEffect(() => {
    let mounted = true;
    getCustomers()
      .then(items => {
        if (mounted) {
          setCustomers(items.content)
        }
      })
    return () => mounted = false;
  }, []);

  const handleCustomerRemove = index => {
  
    const idToDelete = customers[index].id;

    if(deleteCustomer(idToDelete)){
      const newCustomers = customers.filter(((row, j) => j !== index));
      setCustomers(newCustomers);
    }
  };

  const startCustomerEditing = index => {
    setCustomerEditIndex(index);
  };

  const stopCustomerEditing = index => {
    console.log(index);
    setCustomerEditIndex(-1);
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
      />

    </div>
  );
}

export default App;
