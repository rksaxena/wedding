import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import config from '../data/config.js'

export default class ImgCarousel extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            index: 0,
            direction: null
        }
    }
    handleSelect(selectedIndex, e) {
        this.setState({
          index: selectedIndex,
          direction: e.direction
        });
    }

    render(){
        let numImages = config.numImages;
        let images = [];
        for (let i = 1; i < numImages; i++){
            images.push(<Carousel.Item key={i}> 
                            <img  src={"/img/carousel/" + i + ".jpeg"} />
                        </Carousel.Item>)
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-10">
                        <div className="title">
                            <h3> Photos </h3>
                        </div>
                        <Carousel interval={2000} >
                            {images}
                        </Carousel>
                    </div>
                </div>
            </div>
        
        )
    }

}
