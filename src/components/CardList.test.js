import {shallow} from 'enzyme';
import React from 'react';
import CardList from './CardList';


const mockRobot = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  }
  ];

it('testing the cardlist component',()=>{

	


	expect(shallow(<CardList robots={mockRobot}/>)).toMatchSnapshot();
})