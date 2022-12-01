import React, { useState } from "react";

function NewUserCreation() {
  const [output, setOutput] = useState([]);

  const [query, SetQuery] = useState({
    FACILITY_ID: "AQ",
    USER_ID: "",
    USER_NAME: "",
    USER_PRIVILEGE: ""
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    SetQuery({ ...query, [name]: value.trim().toUpperCase() });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      query.FACILITY_ID &&
      query.USER_NAME &&
      query.USER_ID &&
      query.USER_PRIVILEGE
    ) {
      setOutput([...output, query]);
      SetQuery({
        USER_NAME: "",
        USER_ID: "",
        USER_PRIVILEGE: "",
        FACILITY_ID: "AQ"
      });
    }

    console.log(output);
  };
  return (
    <>
      <article>
        <form onSubmit={handleSubmit} action="post" className="form">
          <div className="form-control">
            <label htmlFor="facilty">Facility</label>
            <select name="FACILITY_ID" id="FACILITY_ID" onChange={handleChange}>
              <option value="AQ">AQ</option>
              <option value="RY">RY</option>
              <option value="KW">KW</option>
              <option value="DP">DP</option>
              <option value="JF">JF</option>
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="USER_NAME">USER NAME</label>
            <input
              type="text"
              id="USER_NAME"
              name="USER_NAME"
              value={query.USER_NAME}
              onChange={handleChange}
            />
          </div>

          <div className="form-control">
            <label htmlFor="USER_ID">USER ID</label>
            <input
              type="text"
              id="USER_ID"
              name="USER_ID"
              value={query.USER_ID}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="USER_PRIVILEGE">USERPRIVILEGE</label>
            <input
              type="number"
              id="USER_PRIVILEGE"
              name="USER_PRIVILEGE"
              value={query.USER_PRIVILEGE}
              onChange={handleChange}
            />
          </div>
          <button type="submit">get query</button>
        </form>
      </article>
      <div className="output">
        {output.map((result, index) => {
          const { USER_NAME, USER_ID, USER_PRIVILEGE, FACILITY_ID } = result;
          return (
            <div key={index}>
              <p>
                {`Insert into rwms14.dms_user (FACILITY_ID,USER_ID,USER_NAME,USER_PRIVILEGE,USER_PASSWORD,USER_LOGDATE,LANGUAGE_CODE,
USER_CLASS,SALT_KEY,INVALID_LOGIN_COUNT,DEFAULT_SHIFT,TASK_ACCEPT_MODE,HASHING_ALGORITHM,JOB_TITLE,EMAIL_ADDRESS1,
EMAIL_ADDRESS2,DEFINE_TRAINING,TRAINING_LEVEL,TRAINING_END_DATE) values ('${FACILITY_ID}','${USER_ID}','${USER_NAME}',${USER_PRIVILEGE},
'076FD337304E35FE4961EE3985EED38BFAAC3AF8',null,'en',
'DEFAULT',
'2FC6F681EA3AB09C1B29B41BE4FCCCBC340DBCDAF3A59494CBBC9DFAA6EA90F880231AD597B1B08D445E740293C2877007950B69AE302194D5D997EAC952AF1C3A72249122A9060BFB3D6528DAC4C5957777D0586695AEA5ACF4FD0E65EC0D09A158116AF288159798D65326485BE08666FFC679AA82515AF7C3A2FC07A989DB',
0,'MORNING','A','DBMS_CRYPTO.HASH_SH1',null,null,null,null,null,null);';
`}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NewUserCreation;
