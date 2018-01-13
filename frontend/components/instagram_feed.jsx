import React from 'react';
import Instafeed from 'instafeed.js'

export default class Instagram extends React.Component {
    constructor() {
        super()
        this.state = {}

    }

    parse(res){
        
        let data = res.data
        
    }


    getFeed(){

        console.log(process.env["instagram_api"])
        const feed = new Instafeed({
					get: "user",
					userId: "30442803",
					accessToken:
						"30442803.892eb7a.27a523a44f654c2195dc56cb307c590f",
					sortBy: "most-recent",
					template: '<a class="photo-insta" href="{{link}}"><img src="{{image}}" /></a>',
					// success: this.parse
				});
        feed.run();
        return null
    }
        

    render(){
        this.getFeed()
        return(
            <div id="instafeed" className="column">

            </div>
                )
    }
}