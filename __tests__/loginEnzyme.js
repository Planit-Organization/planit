import jest from 'jest';
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

import LoginPage from '../client/components/LoginPage';
import RegisterPage from '../client/components/RegisterPage';
import { describe } from 'yargs';
import { beforeAll, expect, it } from '@jest/globals';

configure({ adapter: new Adapter( )});

describe('Login And Register Tests', () => {
  describe('LoginPage', () =>{
    let wrapper;

    beforeAll(() => {
      wrapper = render(<LoginPage/>);
    });
    it('Renders login buttons', () => {
      console.log('WRAPPER', wrapper)
      expect(wrapper.type)
    })
  })
})