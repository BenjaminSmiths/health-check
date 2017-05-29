import React from "react";
import ReactDOM from "react-dom";
import Checkbox from "./checkbox";
import { shallow, mount } from 'enzyme';

it('renders a checkbox', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Checkbox name="Required name" />, div);
});

it('renders a checkbox with checked default value', () => {
    // GIVEN
    const checkbox = mount(
        <Checkbox name="checkMe" checked={true} />
    );

    // WHEN
    checkbox.update();

    // THEN
    expect(checkbox.state().checked).toEqual(true);
});

it('on click it is checked ok', () => {

    // GIVEN
    jest.mock('react-fontawesome', () => 'FontAwesome');
    let onClick = jest.fn();
    const checkbox = shallow(
        <Checkbox name="checkMe" onChange={onClick} />
    );

    // WHEN
    checkbox.simulate('click');

    // THEN
    expect(onClick).toBeCalledWith('checkMe', true);
});