import React from 'react';
import CardComponent from '../../components/Card/CardComponent';
import { Content } from '../../services/models/content';
import Carousel from '../../components/Carousel/Carousel';

export default class Event extends React.Component<Content> {
  render() {
    const content = this.props;

    const buildCardEvent= content.events.map((event, index) => {
        return <CardComponent key={index} title={event.titre} description={event.description} image={event.illustration} type='vertical' />
    });

    
    return (
      <div className='container mx-auto flex gap-4 py-16'>
        <Carousel components={buildCardEvent} />
      </div>
    )
  }
}
