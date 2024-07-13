
import React from 'react';
import { Link } from 'react-router-dom';
import SubMenu from '../../components/SubMenu/SubMenu';
import { Content } from '../../services/models/content';

class Welcome extends React.Component<Content, unknown> {


  render() {
    let subMenuTag = <div>Loading...</div>;
    if (this.props?.subMenu) {
      subMenuTag = <SubMenu {...this.props?.subMenu} />;
    }

    const projects = [
      {
        title: 'Project 1',
        description: 'Description 1',
        imageUrl: 'https://picsum.photos/400/200'
      },
      {
        title: 'Project 2',
        description: 'Description 2',
        imageUrl: 'https://picsum.photos/400/200'
      },
      {
        title: 'Project 3',
        description: 'Description 3',
        imageUrl: 'https://picsum.photos/400/200'
      }
    ];

    const projectstag = projects.map((project, index) => {
      return (
        <div key={index} className='flex flex-col items-center w-full'>
          <img src={project.imageUrl} alt={project.title} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      );
    });


    return (
      <div className='flex flex-col gap-10'>
        {subMenuTag}
        <div className='flex flex-col items-center w-2/3 mx-auto'>
          <h2 className='text-4xl mb-2'>Qui sommes-nous ?</h2>
          <p className='text-center'>{this.props?.description}</p>
          <Link to='/contactez-nous'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>contactez-nous</button>
          </Link>
        </div>
        <div className='flex flex-col items-center w-2/3 mx-auto'>
          <h2 className='text-4xl mb-8'>Nos derniers projects</h2>
          <p className='text-center flex gap-6'>
          {projectstag}
          </p>
        </div>

        {/* mot du president */}
        <div className='flex flex-col items-center w-2/3 mx-auto mb-4'>
          <h2 className='text-4xl mb-8'>Mot du président</h2>
          <p className='text-center'>
            Chers membres de l'Association,

            Je suis fier de vous adresser ces quelques mots en tant que président de notre association estudiantine. Cette année, nous avons accompli de belles réalisations et relevé de nombreux défis grâce à notre solidarité.

            Bilan de l'Année Écoulée

            Nous avons organisé des événements enrichissants et renforcé les liens entre étudiants. Nos projets communautaires ont eu un impact significatif, démontrant notre engagement à faire une différence.

            Objectifs pour l'Avenir

            Nous souhaitons élargir nos activités, explorer de nouveaux partenariats et créer plus d'opportunités pour vous. Améliorer notre communication interne est aussi une priorité pour une meilleure participation de chacun.

            Un Merci Sincère

            Merci aux membres du bureau exécutif, aux bénévoles, et à tous ceux qui ont soutenu nos initiatives. Votre engagement est essentiel à notre succès.

            Invitation à S'Impliquer

            Je vous invite à vous impliquer activement, à participer aux événements et à proposer de nouvelles idées. Ensemble, nous continuerons à bâtir une association forte et dynamique.



          </p>
          <span> Merci pour votre soutien et votre enthousiasme. De belles années nous attendent.Avec gratitude,</span>
        </div>
      </div>
    )
  }
}

export default Welcome;
