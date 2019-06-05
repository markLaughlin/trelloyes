import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('My component', () => {
    //all my test cases here
    //the cards array is passed into the List component from the App component. It does not exist independently in List
    //The List test failed because it did not have access to the cards array when it went through the List component
    //Therefore we put cards in the List component in the List test as an empty array, which means it is no longer undefined
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render((<List cards= {[]}/>), div);
        ReactDOM.unmountComponentAtNode(div);
      });

      it('renders correctly; snapshot test', () => {
        const tree = renderer
          .create(<List cards= {[]}/>)
          .toJSON();
        expect(tree).toMatchSnapshot();
      });


   });


   
  
