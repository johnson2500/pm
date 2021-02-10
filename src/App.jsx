import React from 'react';
import Board from './pages/board/board';
import Navbar from './components/navbar/navbar';
import Drawer from './components/sidenav/sidenav';

export default class App extends React.Component {
  // eslint-disable-next-line constructor-super
  constructor() {
    super();
    this.state = {
      drawer: {
        open: false,
      },
    };
    this.changeDrawer = this.changeDrawer.bind(this);
  }

  changeDrawer(drawer) {
    console.log(drawer);
    this.setState({
      drawer: { ...drawer },
    }, () => {
      console.log(this.state);
    });
  }

  render() {
    const { name, drawer } = this.state;
    const { open } = drawer;
    return (
      <div>
        <Navbar name={name} changeDrawer={this.changeDrawer} />
        <Drawer open={open} />
        <Board />
      </div>
    );
  }
}
