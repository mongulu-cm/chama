import React from 'react';
import { ContentService } from '../../services/content.service';
import { Content } from '../../services/models/content';
import { EventContent } from '../../services/models/event';
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

    return (
      <div className='flex flex-col w-full gap-4 p-4 border-2 border-gray-700 rounded max-w-[90%] md:max-w-[60%] mx-auto my-4'>
        {event && (
          <>
            <h2 className='text-2xl font-bold text-center'>{event.titre}</h2>
            <h3 className='text-xl font-bold text-center'>Du {format(event.debut_periode, 'dd/MM/yyyy')} au {format(event.fin_periode, 'dd/MM/yyyy')}</h3>
            <img src={`${urlDirectusAsset}/${event.illustration}`} alt={event.titre} className='w-full h-96 object-cover' />
            <div dangerouslySetInnerHTML={{ __html: event.description }} />
          </>
        )}
        {!event && <h2 className='text-2xl text-center py-8'>Aucun evenement trouvé</h2>}
      </div>
    )
  }
}
