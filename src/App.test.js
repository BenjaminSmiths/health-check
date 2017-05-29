import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { mount } from 'enzyme';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('App has a default label', () => {
    // GIVEN
    const checkbox = mount(
        <App />
    );

    // WHEN
    checkbox.update();

    // THEN
    expect(checkbox.state().label).toEqual('check the box to win');
});

it('app has a label and checkbox', () => {
    const tree = renderer.create(
        <App />
    ).toJSON();

    expect(tree).toMatchSnapshot();
});