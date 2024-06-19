import './App.css';

import React from 'react'
import { Content } from './services/models/content';
import { ContentService } from './services/content.service';
import Menu from './components/Menu/Menu';

export default class App extends React.Component<unknown, Content> {

  componentDidMount(): void {
    Promise.all([ContentService.getMenuContent(), ContentService.getMetaContent()]).then(([menu, meta]) => {
      this.setState({
        menu: menu
      });
    });
  }

  render() {
    // const { menu } = this.state;
    let menuTag: JSX.Element | null = null;
    if (this.state?.menu) {
      menuTag = <Menu {...this.state?.menu} />;
    } else {
      menuTag = <div>Loading...</div>;
    }

    return (
      <div>
        {menuTag}
      </div>
    )
  }
}

