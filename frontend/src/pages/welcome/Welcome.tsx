
import React from 'react';
import { Link } from 'react-router-dom';
import SubMenu from '../../components/SubMenu/SubMenu';
import { Content } from '../../services/models/content';
import { ContentService } from '../../services/content.service';
import { IconButton } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

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

    const urlDirectusAssets = ContentService.api_url_assets;
    const urlPhotoPresident = this.props?.associationInfo?.photo_president;
    const imagePresident = urlPhotoPresident 
      ? <img src={`${urlDirectusAssets}/${urlPhotoPresident}`} alt='photo du president' className='w-1/3 rounded-full' /> 
      : <IconButton><PersonIcon /></IconButton>;
    return (
      <div className='flex flex-col gap-10'>
        {subMenuTag}
        <div className='flex flex-col items-center w-2/3 mx-auto min-w-[90%] md:min-w-min'>
          <h2 className='text-4xl mb-2'>Qui sommes-nous ?</h2>
          <p className='text-center '>{this.props?.description}</p>
          <Link to='/contactez-nous'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>contactez-nous</button>
          </Link>
        </div>
        <div className='flex flex-col items-center w-2/3 mx-auto'>
          <h2 className='text-4xl mb-8'>Nos derniers projects</h2>
          <p className='text-center flex gap-6 flex-col md:flex-row min-w-[90%] md:min-w-min'>
          {projectstag}
          </p>
        </div>

        {/* mot du president */}
        <div className='flex flex-col items-center w-2/3 mx-auto mb-4 min-w-[90%] md:min-w-min'>
          <h2 className='text-4xl mb-8'>Mot du président</h2>
          <div className='flex gap-6'>
           {imagePresident}
            <div className='flex flex-col gap-4'>
              <h3 className='text-2xl font-bold'>{this.props?.associationInfo?.nom_du_president}</h3>
              <p>{this.props?.associationInfo?.mot_du_president}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome;
