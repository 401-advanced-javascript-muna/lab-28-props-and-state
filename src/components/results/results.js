/* eslint-disable react/prop-types */
import React from 'react';
import ReactJson from 'react-json-view'; //https://www.npmjs.com/package/react-json-view
function Results(props) {
  console.log('props.results', props);

  return (
    <>
      <div className="overlay">
        <div className="results">
          {/* <span className="title">{this.props.title}</span> */}
          {/* <button className="close" onClick={this.props.close}>X</button> */}
          <ReactJson src={props.results} theme="monokai" />

          {/* <div className="content">
          {this.props.children}
        </div> */}
        </div>
      </div>
    </>
  );
}
export default Results;
