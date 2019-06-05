import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('My component', () => {
    //all my test cases here
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
      });

      it('renders correctly; snapshot test', () => {
        const tree = renderer
          .create(<Card/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });
   });