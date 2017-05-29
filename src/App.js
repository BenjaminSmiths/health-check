import React, {Component} from "react";
import logo from "./logo.svg";
import Label from "./components/label";
import "./App.css";
import Checkbox from "./components/checkbox";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            label: 'check the box to win'
        }
    }

    onChecked (checked) {
        let label = checked ? 'you are a winner' : 'but now you lost it :p';
        this.setState({label: label, checked: checked});
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to The Health Check</h2>

                </div>
                <div className="content-body">
                    <Label value={this.state.label}>
                        <Checkbox name="FirstOfHisName" checked={this.state.checked} onChange={(name, checked) => {
                            this.onChecked(checked);
                        }}/>
                    </Label>
                </div>
            </div>
        );
    }
}


export default App;
