import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from '../../../src/app.js';
import Form from '../../../src/components/form.js';

describe('<App/>', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});