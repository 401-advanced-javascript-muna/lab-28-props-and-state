/* eslint-disable react/prop-types */
import React from 'react';

function Form(props) {
  const handleSubmit = async e => {
    console.log('ddddddddd', props, props.apiUrl);
    e.preventDefault();
    // console.log("props.api", props.apiUr);
    const raw = await fetch(props.apiUrl); // fetch from api
    const data = await raw.json(); //to json
    console.log('data', data);

    props.handleSubmitApi(data);
  };
  const handleChange = e => {
    e.preventDefault();
    const apiUrl = e.target.value;
    console.log('apiurl', apiUrl);
    // props.api = e.target.value;
    props.handleChangeApi(apiUrl);
  };
  // <button>Post</button>
  //     <button>Put</button>
  //     <button>Delete</button>
  //     <button>GO</button>
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} />
      <section>
        <button type="submit">Get</button>
      </section>
    </form>
  );
}
export default Form;
