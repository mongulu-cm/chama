import React, { Fragment } from 'react'
import { ContentService } from '../../services/content.service';
import Card from '@mui/material/Card';
import { Button, CardActions, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

export interface ICardProps {
  title: string;
  description: string;
  image: string;
  route: string;
}

export default class CardComponent extends React.Component<ICardProps, unknown> {

  
  render() {
    const { title, description, image, route } = this.props;
    const urlAssets = ContentService.api_url_assets;
    const truncateDescription = description.slice(0, 100) + '...';
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
          <Button variant="outlined" >
            <Link  to={route} replace>Plus de details </Link>
          </Button>
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
