import React from 'react'

export interface ICardProps {
    title: string;
    description: string;
    image: string;
    url: string;
}

export default class Card extends React.Component<ICardProps, unknown>{
  render() {
    return (
      <div>Card</div>
    )
  }
}
