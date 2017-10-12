import React from 'react';
import config from '../data/config.js'
export default class HomeContent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {};
    }
    render() {
        let homeTitle = config.homeTitle;
        let homeContent = config.homeContent;
        let weddingDate = config.weddingDate;
        let content = [];
        for (let i = 0; i < homeContent.length; i++){
            content.push(<p key={i} >{homeContent[i]}</p>)
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-7">
                        <div className="home-text" >
                            <h1> {homeTitle} </h1>
                            {content}
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-5">
                        <div className="date-t" >
                            <img src='/img/heart.png' className="img-css" />
                            <p> {weddingDate} </p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
