/* eslint-disable react/prop-types */
import React from 'react';
import ReactJson from 'react-json-view'; //https://www.npmjs.com/package/react-json-view
function Results(props) {
  console.log('props.results', props);

  return (
    <>
      <ReactJson src={props.results} theme="monokai" />
    </>
  );
}
export default Results;
