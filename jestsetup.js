import React, {Component} from 'react';
import Enzyme, {shallow, render, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'babel-polyfill';

// React 16 Enzyme adapter
Enzyme.configure({adapter: new Adapter()});

// Making React and enzyme functions available globally to all tests instead of having to import them every time.
global.React = React;
global.Component = Component;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.localDevBackend = false;

jest.mock('@material/checkbox');
jest.mock('@material/form-field');
jest.mock('@material/switch');

// If something calls console.error, throw a real error so tests fail loudly
console.error = (message) => {  // eslint-disable-line
    throw new Error(message);
};
