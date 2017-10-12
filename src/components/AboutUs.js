import React from 'react';
import config from '../data/config.js'
export default class HomeContent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {};
    }
    render() {
        let aboutUs = config.aboutUs
        let ladkewale_items = [];
        let ladkiwale_items = [];
        let ladke = aboutUs['ladke'];
        let ladki = aboutUs['ladki']
        for (let i = 0; i < ladke.length; i++){
            ladkewale_items.push(
                <p key={i} className={ladke[i]["class"]}><img src={ladke[i]["img"]}/> {ladke[i]["name"]} 
                    <span style={{"display":"block", "fontStyle": "italic"}}> {ladke[i]["tag"]} </span>
                </p>
            )
        }
        for (let i = 0; i < ladki.length; i++){
            ladkiwale_items.push(
                <p key={i} className={ladki[i]["class"]}><img src={ladki[i]["img"]}/> {ladki[i]["name"]} 
                    <span style={{"display":"block", "fontStyle": "italic"}}> {ladki[i]["tag"]} </span>
                </p>
            )
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title">
                            <h3> Families </h3>
                        </div>
                    </div>

                    <div className="col-sm-12 events-text"> 
                        <div className="col-sm-12"> Ladkewale </div> 
                        <div className="col-sm-12" style={{"maxWidth":"100%", "overflowX":"scroll", "display":"inline-block", "whiteSpace": "nowrap"}}>
                            {ladkewale_items}
                        </div>
                    </div>
                    <div className="col-sm-12 events-text"> 
                        <div className="col-sm-12">
                            Ladkiwale
                        </div>
                        <div className="col-sm-12" style={{"maxWidth":"100%", "overflowX":"scroll", "display":"inline-block", "whiteSpace": "nowrap"}}>
                            {ladkiwale_items}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
