import React from 'react';
import Home from '../home/home.js';
import Form from '../form/form.js';
import Results from '../results/results.js';
import './app.scss';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      api: '',
      count: 0,
      results: [],
    };
  }
  handleChangetApi = api => {
    // e.preventDefault();
    console.log('this.state', this.state);
    this.setState({ api });
    // this.setState({ api: re });

    // this.setState({ results });
  };
  handleSubmit = results => {
    this.setState({ results });
    console.log('this.statere', this.state.results.results[0]);
  };
  render() {
    return (
      <span>
        <>
          <Form
            apiUrl={this.state.api}
            handleSubmitApi={this.handleSubmit}
            handleChangeApi={this.handleChangetApi}
          />
          <Home results={this.state.results}/>
          <Results results={this.state.results} />
        </>
      </span>
    );
  }
}

export default App;
