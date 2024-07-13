import React, { MouseEvent } from 'react';
import { MenuContent } from '../../services/models/menu';
import './Menu.css';

export interface IPropsMenu extends MenuContent {
  history: any;
}

 class Menu extends React.Component<IPropsMenu> {

  private handleClick = (event: MouseEvent<HTMLDivElement>, url: string) => {
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

    this.props.history.navigate(url);
  }

  render() {
    const { items, logo } = this.props;
    const tags = items.map((item, index) => {
      const className = index === 0 ? 'item active menu-item' : 'item menu-item';
      return <div className={className} key={item.url} onClick={(event) => this.handleClick(event, item.url)}>
        {item.title}</div>
    });
    return (
      <div className='header-menu container mx-auto'>
        <nav className=' flex items-center justify-center'>
          {logo && <img src={logo} alt='logo' className='logo' />}
          <div className="flex gap-4 flex-col sm:flex-row">{tags}</div>
        </nav>
      </div>
    )
  }
}

export default Menu;
