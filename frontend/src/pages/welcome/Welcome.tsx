
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel/Carousel';
import { ContentService } from '../../services/content.service';
import { Content } from '../../services/models/content';

class Welcome extends React.Component<Content, unknown> {


  render() {

    const projects = this.props?.events.slice(0, 3);
    // if (projects.length < 3) {
    //   const events: any = this.props?.events.slice(0, 3 - projects.length);
    //   projects.push(...events);
    // }

    const urlAssets = ContentService.api_url_assets;


    const projectstag = projects.map((project, index) => {
      return (
        <div key={index} className='flex flex-col items-center w-1/3'>
          <a href="/listes-evenements">
            <img
              src={`${urlAssets}/${project.illustration}`}
              alt={project.titre}
              className='w-full h-48 object-cover'
            />
          </a>
          <h3 className='font-semibold'>{project.titre}</h3>
        </div>
      );
    });

    const urlDirectusAssets = ContentService.api_url_assets;
    const urlPhotoPresident = this.props?.associationInfo?.photo_president;
    const imagePresident = urlPhotoPresident
      ? <img src={`${urlDirectusAssets}/${urlPhotoPresident}`} alt='Le president' className='w-2/3 md:w-1/3 rounded-tl-full rounded-bl-full rounded-br-full p-5' />
      : <IconButton><PersonIcon /></IconButton>;
    const carouselImages = this.props?.carousel?.galeries.filter(x => x).map((galery) => {
      return `${urlDirectusAssets}/${galery}`;
    });
    const videoCarousel = this.props?.carousel?.video ? `${urlDirectusAssets}/${this.props?.carousel?.video}` : undefined;
    return (
      <div className='flex flex-col gap-10'>
        <Carousel images={carouselImages} video={videoCarousel} />
        <div className='flex flex-col items-center w-2/3 mx-auto min-w-[90%] md:min-w-min'>
          <h2 className='text-4xl mb-2'>Qui sommes-nous ?</h2>
          <div className='text-center '>{this.props?.description}</div>
          <Link to='/nous-contactez'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4'>contactez-nous</button>
          </Link>
        </div>
        <div className='flex flex-col items-center w-2/3 mx-auto'>
          <h2 className='text-4xl mb-8'>Nos derniers évennements</h2>
          <div className='text-center flex gap-6 flex-col md:flex-row min-w-[90%] md:min-w-min'>
            {projectstag}
          </div>
        </div>

        {/* mot du president */}
        <div className='flex flex-col items-center md:w-2/3 mx-auto mb-4 min-w-[90%] md:min-w-min'>
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
