import React from 'react';
import FacebookProvider, { ShareButton } from 'react-facebook';

class FacebookShare extends React.Component {
    render(){
        return (
            <FacebookProvider appId="1625426427527020">
                <ShareButton href="" />
            </FacebookProvider>
        );
    }
}

export default FacebookShare