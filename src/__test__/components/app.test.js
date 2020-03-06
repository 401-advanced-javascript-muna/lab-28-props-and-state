/* eslint-disable no-unused-vars */
import React from 'react';
import { shallow ,mount} from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../../components/app/app.js';

describe('<App/>', () => {
  it('exists at the start of the application', () => {
    let app = shallow(<App />);
    expect(app.find('span').exists()).toBeTruthy();
  });
  it('Changes the state on click Get', ()=> {
    let app = mount(<App />);
    let buttonGet = app.find('.get');
    buttonGet.simulate('click');
    expect(app.state('results')).toEqual([]);
  });
  it('Renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});