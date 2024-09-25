import React from 'react';
import { Content } from '../../services/models/content';

export interface IAdhesionProps {
    helloasso_form?: string;
}

export default class Adhesion extends React.Component<Content> {
    render() {
        const iframeStyle = {
            width: '100%',
            height: '850px',
            border: 'none'
        };

        return (
            <div className='py-4'>
                <iframe 
                    id="haWidget"
                    title='adhesion'
                    src={this.props?.associationInfo?.helloasso_form}
                    style={iframeStyle}
                ></iframe>
            </div>
        );
    }
}
