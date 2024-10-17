import React from 'react'
import { FooterContent } from '../../services/models/menu'

export default class Footer extends React.Component<FooterContent> {
  render() {
    const { tel, adresse, email, socialLinks } = this.props;

    return (
      <footer className="bg-gray-900 text-white p-10 flex flex-col">
        <div className="flex flex-col md:flex-row items-start justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-10 md:w-30">
          <div className="w-full md:w-1/2 lg:w-1/3 flex-grow text-center md:text-center">
            <h2 className="font-bold mb-4">CONTACTEZ-NOUS</h2>
            <span className="block" >{adresse}</span>
            {tel && <span className="mt-2 block">Téléphone : {tel}</span>}
            <span>Email : <a href={`mailto:${email}`} className="underline">{email}</a></span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex-grow text-center md:text-center">
            <h2 className="font-bold mb-4">SUIVEZ NOS ACTUALITÉS</h2>
            <div className='flex justify-center space-x-4'>
              {socialLinks.map((item, index) => (
                <a key={index} href={item.url} className="underline">{item.title}</a>
              ))}
            </div>
          </div>
        </div>
        <div className='flex justify-center rounded-full text-center gap-6 items-center font-bold text-lg px-12 py-2 border-2 mx-auto'>
          <span className='h-full'>
            Créer et diffusé par
          </span>
          <a href='https://www.mongulu.cm' target='_blank' rel='noreferrer'>
            <img src="https://www.mongulu.cm/public/logo.png" alt="Créer et diffuser" className="h-10" />
          </a>
        </div>
      </footer>
    );
  }
}
