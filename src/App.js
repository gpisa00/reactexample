import React, { useState, useEffect } from 'react';
import { getCustomers } from './services/CustomerService';
import Widget from './components/Widget';
import { customerColumns, customerInputs } from './Constants';


function App() {

  const [customers, setCustomers] = useState([]);

    useEffect(() => {
      let mounted = true;
      getCustomers()
        .then(items => {
          if(mounted) {
            setCustomers(items.content)
          }
        })
      return () => mounted = false;
    }, []);

  return (
    <div className="App">
      <Widget title="Customers" data={customers} columns={customerColumns} inputs={customerInputs}/>
    </div>
  );
}

export default App;
