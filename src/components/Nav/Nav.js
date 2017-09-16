import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from './LeftDrawer/LeftDrawer';


function menuClick() {
    // alert('alerted');
}

var open = true;

export default class Nav extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.changeState = this.changeState.bind(this)
    }

    changeState(){
        this.setState({
            isOpen: true
        })
    }

    render() {
        return (
            <div>
                <AppBar
                    title="My React App"
                    onLeftIconButtonTouchTap={this.changeState}
                />
                <LeftDrawer open={this.state.isOpen} />
            </div>
        )
    }
}