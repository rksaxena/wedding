import React from 'react';
import config from '../data/config';
export default class HomeContent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {};
    }
    render() {
        let ceremonies = config.ceremonies;
        let ceremonyDetails = []
        for(let i = 0; i < ceremonies.length; i++){
            ceremonyDetails.push(
                    <div key={i} className="col-sm-6">
                        <div className="events-text" >
                            <h1> {ceremonies[i]["name"]} </h1>
                            <img src={ceremonies[i]["img"]} className="img-css" />
                            <p>  <span className="glyphicon glyphicon-calendar"></span> {ceremonies[i]["date"]} </p>
                            <p> {ceremonies[i]["time"]} </p>
                            <p> {ceremonies[i]["venue"]} </p>
                            <p> Click <a href={ceremonies[i]["directions"]} target='_blank'> here </a> for directions </p>
                        </div>
                    </div>
            
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="title">
                            <h3> Ceremonies </h3>
                        </div>
                    </div>
                    {ceremonyDetails}
                    <div className="col-sm-12">
                        <div className="col-sm-12 events-text">
                            <img className="col-sm-1 img-css" src='/img/dancing.png'/> 
                            <p className="col-sm-10"> It is <b> MANDATORY</b> to be part of the ongoing singing and dancing performances happening all through the days. </p>
                            <img className="col-sm-1 img-css" src='/img/dancing.png'/> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
