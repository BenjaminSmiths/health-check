import React from "react";
import ReactDOM from "react-dom";
import Label from "./label";

it('renders a label', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Label />, div);
});
