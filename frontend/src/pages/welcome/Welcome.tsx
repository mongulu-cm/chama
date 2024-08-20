
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
      ? <img src={`${urlDirectusAssets}/${urlPhotoPresident}`} alt='Le president' className='w-1/3 rounded-tl-full rounded-bl-full rounded-br-full p-5' />
      : <IconButton><PersonIcon /></IconButton>;
    return (
      <div className='flex flex-col gap-10'>
        {subMenuTag}
        <div className='flex flex-col items-center w-2/3 mx-auto min-w-[90%] md:min-w-min'>
          <h2 className='text-4xl mb-2'>Qui sommes-nous ?</h2>
          <div className='text-center '>{this.props?.description}</div>
          <Link to='/contactez-nous'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>contactez-nous</button>
          </Link>
        </div>
        <div className='flex flex-col items-center w-2/3 mx-auto'>
          <h2 className='text-4xl mb-8'>Nos derniers projects</h2>
          <div className='text-center flex gap-6 flex-col md:flex-row min-w-[90%] md:min-w-min'>
            {projectstag}
          </div>
        </div>

        {/* mot du president */}
        <div className='flex flex-col items-center w-2/3 mx-auto mb-4 min-w-[90%] md:min-w-min'>
          <div className='flex gap-6 flex-col md:flex-row items-center'>
            {imagePresident}
            <div className=' w-2/3 flex flex-col gap-4'>
              <p>{this.props?.associationInfo?.mot_du_president}</p>
              <div className='flex flex-col'>
                <h4 className='text-2xl font-bold flex-grow text-blue-600'>{this.props?.associationInfo?.nom_du_president}</h4>
                <span>Le Président</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome;
