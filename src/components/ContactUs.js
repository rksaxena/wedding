import React from 'react';
import config from '../data/config.js'
export default class HomeContent extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {};
    }
    render() {
        let contactUs = config.contactUs;
        let ladkewale = contactUs["ladkewale"];
        let ladkiwale = contactUs["ladkiwale"];
        let ladkewaleP = ladkewale["phones"];
        let ladkiwaleP = ladkiwale["phones"];
        let ladkewaleContacts = [];
        let ladkiwaleContacts = [];

        for (let i = 0; i < ladkewaleP.length; i++){
            ladkewaleContacts.push(<p key={i}> 
                                       <span className="glyphicon glyphicon-phone" /> 
                                       {ladkewaleP[i]["name"]}: {ladkewaleP[i]["number"]}
                                   </p>);
        }
        ladkewaleContacts.push(<p> <span className="glyphicon glyphicon-home" /> {ladkewale["address"]} </p>)

        for (let i = 0; i < ladkiwaleP.length; i++){
            ladkiwaleContacts.push(<p key={i}> 
                                       <span className="glyphicon glyphicon-phone" /> 
                                       {ladkiwaleP[i]["name"]}: {ladkiwaleP[i]["number"]}
                                   </p>);
        }
        ladkiwaleContacts.push(<p> <span className="glyphicon glyphicon-home" /> {ladkiwale["address"]} </p>)


        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
         ``               <div className="title">
                            <h3> Contact Us </h3>
                        </div>
                    </div>

                    <div className="col-sm-6">
                        <div className="contact-text">
                            <h1> Ladkewale </h1>
                            {ladkewaleContacts}
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="contact-text">
                            <h1> Ladkiwale </h1>
                            {ladkiwaleContacts}
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="col-sm-12 events-text">
                            <p> <span className="glyphicon glyphicon-warning-sign" />  Only people allowed, strictly no gifts</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

