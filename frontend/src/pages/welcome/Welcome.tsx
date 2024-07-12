
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Menu from '../../components/Menu/Menu';
import SubMenu from '../../components/SubMenu/SubMenu';
import { Content } from '../../services/models/content';

class Welcome extends  React.Component<Content, unknown> {


  render() {
    // const { menu } = this.state;
    let menuTag = <div>Loading...</div>;
    let subMenuTag = <div>Loading...</div>;
    if (this.props?.menu) {
      menuTag = <Menu {...this.props?.menu} />;
    }
    if (this.props?.subMenu) {
      subMenuTag = <SubMenu {...this.props?.subMenu} />;
    }

    if (this.props?.footer) {
      subMenuTag = <Footer {...this.props?.footer} />;
    }

    return (
      <div className='flex flex-col'>
        {menuTag}
        {subMenuTag}
        <div className='flex flex-col items-center w-2/3 mx-auto'>
          <h2 className='text-4xl mb-2'>Qui sommes-nous ?</h2>
          <p className='text-center'>{this.props?.description}</p>
          <Link to='/contactez-nous'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>contactez-nous</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default Welcome;
