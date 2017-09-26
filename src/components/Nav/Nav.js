import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from './LeftDrawer/LeftDrawer';
import DesktopNav from './DesktopNav/DesktopNav';

export default class Nav extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }

        this.changeState = this.changeState.bind(this)
    }

    changeState() {
        if (this.props.isMobile) {
            this.setState({
                isOpen: true
            })
        } else {
            this.setState({
                isOpen: false
            })
        }
    }

    render() {
        if (this.props.isMobile) {
            return (
                <div>
                    <AppBar
                        title="React Task App"
                        iconElementLeft={this.props.isMobile ? "" : <div></div>}
                        onLeftIconButtonTouchTap={this.changeState}
                    />
                    {this.props.isMobile ? <LeftDrawer open={this.state.isOpen} /> : ""}
                </div>
            )
        } else {
            return (
                <div>
                    <DesktopNav />
                </div>
            )
        }
    }
}