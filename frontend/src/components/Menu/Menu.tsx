import React from 'react';
import { MenuContent } from '../../services/models/menu';
import './Menu.css';

export default class Menu extends React.Component<MenuContent> {

  private handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, url: string) => {
    const element = event.currentTarget;
    //remove active to the first element
    const activeElement = document.querySelector('.menu-item.active');
    if (activeElement) {
      activeElement.classList.remove('active');
    }
    if (element) {
      if (element.classList.contains('active')) {
        element.classList.remove('active');
      } else {
        element.classList.add('active');
      }
    }
  }

  render() {
    const { items, logo } = this.props;
    const tags = items.map((item, index) => {
      const className = index === 0 ? 'item active menu-item' : 'item menu-item';
      return <div className={className} key={item.url} onClick={(event) => this.handleClick(event, item.url)}>{item.title}</div>
    });
    return (
      <div className='header-menu'>
        <nav className='ui container'>
          {logo && <img src={logo} alt='logo' className='logo' />}
          <div className="ui secondary right menu">{tags}</div>
        </nav>
      </div>
    )
  }
}
