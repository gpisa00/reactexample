import React, { useState, useEffect } from 'react';

import { getCustomers } from '../services/CustomerService';

const Table = (props) => {

    const {test} = props;
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
      let mounted = true;
      getCustomers()
        .then(items => {
          if(mounted) {
            setCustomers(items)
          }
        })
      return () => mounted = false;
    }, []);




    return (
        <div>
          Ciao Mondo!!! {test}
          <b/>
          {customers}
        </div>
    );
}

export default Table;