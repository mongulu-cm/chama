import React, { Fragment } from 'react'
import { ContentService } from '../../services/content.service';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardMedia } from '@mui/material';

export interface ICardProps {
  title: string;
  description: string;
  image: string;
  type: 'horizontal' | 'vertical'
}

export default class CardComponent extends React.Component<ICardProps, unknown> {
  render() {
    const { title, description, image, type } = this.props;
    const urlAssets = ContentService.api_url_assets;
    const truncateDescription = description.slice(0, 100) + '...';

    // const cardTag: JSX.Element | null;
    // cardTag = <div className='flex flex-col gap-4 p-4 border-2 rounded max-w-[90%] mx-auto'>
    //   <img src={`${urlAssets}/${image}`} alt={title} className='w-full h-96 object-cover' />
    //   <h2 className='text-2xl font-bold text-center'>{title}</h2>
    //   <div dangerouslySetInnerHTML={{ __html: description }} />
    // </div> 
    const cardTag = (
      <Card sx={{ maxWidth: 450  }}>
        <CardMedia
          component="img"
          height="140"
          image={`${urlAssets}/${image}`}
          alt={title}
        />
        <CardContent>
          <h2 className='text-2xl font-bold text-center'>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: truncateDescription }} />
        </CardContent>
        <CardActions>
          <Button variant="outlined">Plus de details</Button>
        </CardActions>
      </Card>
    );

    return (
      <Fragment>
        {cardTag}
      </Fragment>
    )

  }
}
