import React, { Fragment } from 'react';
import { ContentService } from '../../services/content.service';
import { Content } from '../../services/models/content';
import Slider from '../../components/Slider/Slider';
import { EventContent,EventFilesDto } from '../../services/models/event';
import { format } from 'date-fns';

export interface IStateDetailsEvent {
  id: number;
}

export default class DetailsEvent extends React.Component<Content, IStateDetailsEvent> {
  constructor(props: Content) {
    super(props);
    this.state = {
      id: 0
    }
  }

  // componentDidMount(): void {
  //     const id = useRouteLoaderData('id') as number;
  //     this.setState({ id: id });
  // }
  render() {
    const id = window.location.pathname.split('/')[2];
    const event = this.props.events.find((event: EventContent) => event.id === parseInt(id ?? ''));
    const urlDirectusAsset = ContentService.api_url_assets;
  
    // Build the array of image components for the slider
    let photoSliderComponents: React.ReactElement[] = [];
    if (event && event.photos && event.photos.length > 0) {
      photoSliderComponents = event.photos.map((photo: EventFilesDto, index: number) => {
        return (
          <img
            key={index}
            src={`${urlDirectusAsset}/${photo.directus_files_id}`}
            alt={`Photo ${index + 1}`}
            className='w-full h-96 object-cover'
          />
        );
      });
    }
  
    return (
      <div className='flex flex-col w-full gap-4 p-4 border-2 border-gray-700 rounded max-w-[90%] md:max-w-[60%] mx-auto my-4'>
        {event && (
          <>
            <h2 className='text-2xl font-bold text-center'>{event.titre}</h2>
            <h3 className='text-xl font-bold text-center'>
              Du {format(event.debut_periode, 'dd/MM/yyyy')} au {format(event.fin_periode, 'dd/MM/yyyy')}
            </h3>
            <img
              src={`${urlDirectusAsset}/${event.illustration}`}
              alt={event.titre}
              className='w-full h-96 object-cover'
            />
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
  
            {/* Add the photo slider here */}
            {photoSliderComponents.length > 0 && (
              <Fragment>
                {/* <!-- Slider on desktop --> */}
                <div className='container mx-auto gap-4 py-16 hidden md:flex'>
                  <Slider components={photoSliderComponents} />
                </div>
  
                {/* <!-- Infinite scroll on mobile --> */}
                <div className='flex flex-col gap-4 px-4 mt-4 md:hidden'>
                  {photoSliderComponents}
                </div>
              </Fragment>
            )}
  
            {/* <!-- No photos found --> */}
            {photoSliderComponents.length === 0 && (
              <h2 className='text-2xl text-center py-8'>Aucune photo trouvée</h2>
            )}
          </>
        )}
        {!event && <h2 className='text-2xl text-center py-8'>Aucun evenement trouvé</h2>}
      </div>
    );
  }  
}
