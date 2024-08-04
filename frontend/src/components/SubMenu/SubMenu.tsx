import { AtSymbolIcon, PhoneIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { SubMenuContent } from '../../services/models/menu';
import './SubMenu.css';

export default class SubMenu extends React.Component<SubMenuContent> {



  render() {
    const { contactPhone, title, subscriptionButton, listIconLink } = this.props;

    return (
      <section className='flex w-full flex-col md:flex-row gap-2 justify-around bg-gray-600 text-white items-center mx-auto py-8'>
        <div className='flex gap-2 items-center'>
          <PhoneIcon className='h-8 w-8' />
          <div>{contactPhone}</div>
        </div>
        <span className='w-max-32'>{title}</span>
        {subscriptionButton && <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-6 px-8  rounded'
        >
            S&apos;abonner
        </button>}
        <div className='flex gap-2'>
          {listIconLink.map((item, index) => {
            return (
              <a href={item.url} key={index} className='flex items-center'>
                {index === 0 && <img src='http://www.compagniedumessage.fr/medias/images/picto-facebook.png?fx=r_40_40' alt='facebook' className='h-8 w-8' />}
                {index === 1 && <AtSymbolIcon className='h-8 w-8' />}
              </a>
            );
          })}
        </div>

      </section>
    )
  }
}
