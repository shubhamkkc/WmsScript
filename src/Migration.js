import React, { useState } from "react";

function Migration() {
  const [output, setOutput] = useState([]);

  const [query, SetQuery] = useState({
    rma: "",
    facilty: "AQ"
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    SetQuery({ ...query, [name]: value.trim() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.rma && query.facilty) {
      setOutput([...output, query]);
      SetQuery({ rma: "", facilty: "AQ" });
    }

    console.log(output);
  };
  return (
    <>
      <article>
        <form onSubmit={handleSubmit} action="post" className="form">
          <div className="form-control">
            <label htmlFor="RMA">RMA number</label>
            <input
              type="text"
              id="rma"
              name="rma"
              value={query.rma}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="facilty">facilty</label>
            <select name="facilty" id="facilty" onChange={handleChange}>
              <option value="AQ">AQ</option>
              <option value="RY">RY</option>
              <option value="KW">KW</option>
              <option value="DP">DP</option>
              <option value="JF">JF</option>
            </select>
          </div>
          <button type="submit">get query</button>
        </form>
      </article>
      <div className="output">
        {output.map((result, index) => {
          const { rma, facilty } = result;
          return (
            <div key={index}>
              <p>
                {`delete from pending_returns where Rma_nbr='${rma}' and facility_id='${facilty}';
`}
              </p>
              <p>
                {`delete from pending_returns_detail where Rma_nbr='${rma}' and
                facility_id='${facilty}';`}
              </p>
              <p>
                {` delete from rwms14.atg_pending_returns_detail_loc where Rma_nbr='${rma}' and facility_id='${facilty}';`}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Migration;
