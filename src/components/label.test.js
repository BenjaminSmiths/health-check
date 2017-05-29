import React from "react";
import ReactDOM from "react-dom";
import Label from "./label";
import renderer from 'react-test-renderer';

it('renders a label', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Label value='this is required' />, div);
});

it('lable can have children', () => {
    const tree = renderer.create(
        <Label value='this is required' ><div id="child">hello world</div></Label>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});