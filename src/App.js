import React, { useState, useEffect } from 'react';
import { getCustomers } from './services/CustomerService';
import Widget from './components/Widget';
import { customerColumns } from './Constants';


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
      <Widget data={customers} columns={customerColumns}/>
    </div>
  );
}

export default App;
