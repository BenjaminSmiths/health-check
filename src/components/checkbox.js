import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

export default class Checkbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.props = nextProps;
        this.setState({checked: nextProps.checked});
    }

    render() {

        return (
            <div onClick={() => {
                    this._changeCheckedHandle()
                 }}
                 style={{
                     width: 20,
                     height: 20,
                     borderStyle: 'solid',
                     borderRadius: 2,
                     borderWidth: 2,
                     margin: 5
                 }}
            >
                <div style={{flex: 1, alignItems: 'center'}}>
                    { this.state.checked && <FontAwesome name='check' />}
                </div>
            </div>
        )
    }

    _changeCheckedHandle() {
        let checked = !this.state.checked;
        this.setState({checked: checked});
        this.props.onChange && this.props.onChange(this.props.name, checked);
    }
}

Checkbox.propTypes = {
    checked: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
};
