import React from 'react';
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
      <>
        <div>
          <Form
            apiUrl={this.state.api}
            handleSubmitApi={this.handleSubmit}
            handleChangeApi={this.handleChangetApi}
          />
          <Results results={this.state.results} />
        </div>
      </>
    );
  }
}

export default App;
