import React from 'react';

export default class Adhesion extends React.Component {
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
                    src="https://www.helloasso.com/associations/collectif-mongulu/adhesions/formulaire-ahesion/widget" 
                    style={iframeStyle}
                ></iframe>
            </div>
        );
    }
}
