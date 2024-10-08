import MenuIcon from '@mui/icons-material/Menu';
import React, { Fragment, MouseEvent } from 'react';
import { MenuContent } from '../../services/models/menu';
import './Menu.css';
import { IconButton } from '@mui/material';

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

  private showMenuMobile = () => {
    const element = document.getElementById('mobile-menu');
    if (window.innerWidth <= 478 && element) { // Check if the screen size is mobile
      if (element.classList.contains('hidden-mobile')) {
        element.classList.remove('hidden-mobile');
        element.classList.add('flex');
      } else {
        element.classList.remove('flex');
        element.classList.add('hidden-mobile');
      }
    } else {
      if (element) {
        element.classList.add('hidden');
      }
    }
  }

  render() {
    const { items, logo } = this.props;
    const tags = items.map((item, index) => {
      const className = index === 0 ? 'item active menu-item' : 'item menu-item';
      return <div className={className} key={item.url} onClick={(event) => { this.showMenuMobile(); this.handleClick(event, item.url); }}>
        {item.title}</div>
    });
    return (
      <Fragment>
        <div className='header-menu mx-auto hidden md:block'>
          <nav className=' flex items-center justify-center'>
            {logo && <img src={logo} alt='logo' className='logo' />}
            <div className="flex gap-4 flex-col sm:flex-row">{tags}</div>
          </nav>
        </div>
        <div className=' container mx-auto flex justify-between w-full md:hidden px-4 items-center'>
          {logo && <img src={logo} alt='logo' className='logo' />}
          <IconButton onClick={() => this.showMenuMobile()}><MenuIcon className='h-8 w-8' /></IconButton>

        </div>
        <nav id="mobile-menu" className='items-center justify-center z-10 h-full hidden-mobile'>
          <div className="flex gap-4 flex-col sm:flex-row">{tags}</div>
        </nav>
      </Fragment>
    )
  }
}

export default Menu;
