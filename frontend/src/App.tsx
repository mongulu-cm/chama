import './App.css';

import React from 'react'
import { Content } from './services/models/content';
import { ContentService } from './services/content.service';
import Menu from './components/Menu/Menu';
import SubMenu from './components/SubMenu/SubMenu';
import Footer from './components/Footer/Footer';

export default class App extends React.Component<unknown, Content> {

  componentDidMount(): void {
    Promise.all([
      ContentService.getMenuContent(), 
      ContentService.getMetaContent(),
      ContentService.getSubMenuContent(),
      ContentService.getFooterContent(),
    ]).then(([menuContent, metaContent, subMenuContent, footerContent]) => {
      this.setState({
        menu: menuContent,
        subMenu: subMenuContent,
        footer: footerContent,
      });
    });
  }

  render() {
    // const { menu } = this.state;
    let menuTag = <div>Loading...</div>;
    let subMenuTag = <div>Loading...</div>;
    if (this.state?.menu) {
      menuTag = <Menu {...this.state?.menu} />;
    }
    if(this.state?.subMenu){
      subMenuTag = <SubMenu {...this.state?.subMenu} />;
    }

    if(this.state?.footer){
      subMenuTag = <Footer {...this.state?.footer} />;
    }

    return (
      <div className='flex flex-col '>
        {menuTag}
        {subMenuTag}
      </div>
    )
  }
}

