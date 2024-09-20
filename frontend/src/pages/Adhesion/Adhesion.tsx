import React from 'react';
import { Content } from '../../services/models/content';

export interface IAdhesionProps {
    helloasso_form?: string;
}

export default class Adhesion extends React.Component<Content> {
    render() {
        const iframeStyle = {
            width: '100%',
            height: '750px',
            border: 'none'
        };

        return (
            <div>
                <iframe 
                    id="haWidget" 
                    allowTransparency={true} 
                    scrolling="auto" 
                    src={this.props?.associationInfo?.helloasso_form}
                    style={iframeStyle}
                ></iframe>
            </div>
        );
    }
}
