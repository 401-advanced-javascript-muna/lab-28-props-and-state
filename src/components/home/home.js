import React from 'react';
import { If, Then, Else } from '../if/index.js';
import Results from '../results/results.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  
  toggleModal = () => {
    this.setState({ open: !this.state.open });
    console.log('__STATE__', this.state);
      
  }
    
  render() {
    return (
    // console.log( 'props ',props.results)
      <section>
        <If condition={this.state.open}>
          <Then>
            <Results title="results" close={this.toggleModal}>
              <h1>The results</h1>
            </Results>
          </Then>
        </If>
        <Else>
          <button onClick={this.toggleModal}>The results</button>
        </Else>
      </section>
    )
  }
}

export default Home;