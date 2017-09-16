import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import {Menu, MenuItem} from 'material-ui/Menu';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Divider from 'material-ui/Divider';


export default class LeftDrawer extends Component {

  constructor(props) {
    super(props);
    this.state = { open: this.props.open };

    this.closeDrawer = this.closeDrawer.bind(this)
  }


  componentWillReceiveProps(newProps) {
    this.setState({ open: newProps.open });
  }


  closeDrawer() {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <div>


        <Drawer open={this.state.open}>
          <AppBar
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            title="Menu"
            onLeftIconButtonTouchTap={this.closeDrawer}
          />
          <MenuItem>View Tasks</MenuItem>
          <MenuItem>Create Task</MenuItem>
          <Divider />
          <MenuItem>Manage Customers</MenuItem>
        </Drawer>
      </div >
    );
  }
}