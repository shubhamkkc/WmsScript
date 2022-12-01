import React, { useState } from 'react';

function Deadlock() {
  const [output, setOutput] = useState([]);

  const [query, SetQuery] = useState({
    rma: '',
    order: '',
    error: '',
    facilty: 'AQ',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    SetQuery({ ...query, [name]: value.trim() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.rma && query.order && query.facilty) {
      setOutput([...output, query]);
      SetQuery({ rma: '', order: '', error: '', facilty: 'AQ' });
    }

    console.log(output);
  };
  return (
    <>
      <article>
        <form onSubmit={handleSubmit} action='post' className='form'>
          <div className='form-control'>
            <label htmlFor='RMA'>RMA number</label>
            <input
              type='text'
              id='rma'
              name='rma'
              value={query.rma}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='order'>order number</label>
            <input
              type='text'
              id='order'
              name='order'
              value={query.order}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='eroor'>Error Message</label>
            <input
              type='text'
              id='error'
              name='error'
              value={query.error}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='facilty'>facilty</label>
            <select name='facilty' id='facilty' onChange={handleChange}>
              <option value='AQ'>AQ</option>
              <option value='RY'>RY</option>
              <option value='KW'>KW</option>
              <option value='DP'>DP</option>
              <option value='JF'>JF</option>
            </select>
          </div>
          <button type='submit'>get query</button>
        </form>
      </article>
      <div className='output'>
        {output.map((result, index) => {
          const { rma, order, error, facilty } = result;
          return (
            <p key={index}>
              {`update rwms14.atg_cloud_returns_upload set processed_ind = 'N',
              error_message = null where CUST_ORDER_NBR = '${order}'
              and RMA_NBR = '${rma}' and processed_ind = 'E' and FACILITY_ID
              = '${facilty}' and error_message like '%${error}%'; \n `}
            </p>
          );
        })}
      </div>
    </>
  );
}
export default Deadlock;
