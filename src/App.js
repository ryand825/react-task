import React, { Component } from 'react';
import './App.css';
import router from './router';

import Nav from './components/Nav/Nav';

class App extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;

    // if (isMobile) {
      return (
        <div className="App">
          <Nav isMobile={isMobile} />
          {router}
        </div>
      );
    // } else {
    //   return (
    //     <div>
    //       {router}
    //     </div>
    //   );
    // }
  }
}

export default App;