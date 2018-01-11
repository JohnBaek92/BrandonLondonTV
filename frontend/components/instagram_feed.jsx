import React from 'react';
import Instafeed from 'instafeed.js'

export default class Instagram extends React.Component {
    constructor() {

    }


    getFeed(){

        
        feed = new Instafeed({
            get: 'tagged',
            tagName: 'awesome',
            clientId: 'YOUR_CLIENT_ID'
        });
        feed.run();
    }
        

    render(){

    }
}