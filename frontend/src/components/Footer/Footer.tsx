import React from 'react'
import { FooterContent } from '../../services/models/menu'

export default class Footer extends React.Component<FooterContent> {
  render() {
    const { tel, adresse, email, socialLinks } = this.props;

    return (
      <div className="bg-gray-900 text-white p-10">
        <div className="flex flex-col md:flex-row items-start justify-center md:justify-between space-y-6 md:space-y-0 md:space-x-10 md:w-30">
          <div className="w-full md:w-1/2 lg:w-1/3 flex-grow text-center md:text-center">
            <h2 className="font-bold mb-4">CONTACTEZ-NOUS PREVIEW</h2>
            <span className="block" >{adresse}</span>
            <span className="mt-2 block">Téléphone : {tel}</span>
            <span>Email : <a href={`mailto:${email}`} className="underline">{email}</a></span>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 flex-grow text-center md:text-center">
            <h2 className="font-bold mb-4">SUIVEZ NOS ACTUALITÉS</h2>
            {socialLinks.map((item, index) => (
              <a href={item.url} className="underline">{item.title}</a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
