import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { MenuItem } from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';
import { Redirect } from 'react-router';



export default class LeftDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = { open: this.props.open };

    this.closeDrawer = this.closeDrawer.bind(this);
    this.changeRoute = this.changeRoute.bind(this);
  }


  componentWillReceiveProps(newProps) {
    this.setState({ open: newProps.open });
  }

  closeDrawer() {
    this.setState({
      open: false,
    });
  }

  changeRoute(newRoute) {
    this.setState({ open: false, redirect: newRoute })
  }

  componentWillUpdate() {
    if (this.state.redirect) {
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.redirect) {
      this.setState({ open: false, redirect: false });
    }
  }

  render() {
    return (
      <div>
        <Drawer open={this.state.open}
          docked={false}
          onRequestChange={this.closeDrawer}>
          <AppBar
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            title="Menu"
            onLeftIconButtonTouchTap={this.closeDrawer}
          />
          <MenuItem onClick={() => this.changeRoute('/')}>My Tasks</MenuItem>
          <MenuItem onClick={() => this.changeRoute('/taskview')}>View Tasks</MenuItem>
          <MenuItem onClick={() => this.changeRoute('/createtask')}>Create Task</MenuItem>
          <Divider />
          <MenuItem onClick={() => this.changeRoute('/')}>Manage Customers</MenuItem>
        </Drawer>

        {this.state.redirect && this.state.open === false ? <Redirect push to={this.state.redirect} />:""}
      </div >
    );
  }
}
