import React, {Component} from 'react';

const style = {
  enableBackground: 'new 0 0 500 500',
  fill: 'url(#linear-gradient)'
}

class Smile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      angle: 315
    };
  }  
  
  onMouseMove = (e) => {
    this.setState((prevState) => {
      if(prevState.angle>360){
        return {angle : 0}
      } else {
        return {angle : prevState.angle + 4}        
      }
    });
  }

  render(){
    return (
      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
        viewBox="0 0 500 500" style={style}  
        xmlSpace="preserve" width={500} height={500}
        onMouseMove = {this.onMouseMove}>
        <style type="text/css"/>
          <g id="XMLID_4_">
          <g id="XMLID_3_">
            <circle id="XMLID_1_" className="st0" cx="168.8" cy={176} r="14.5" />
            <circle id="XMLID_2_" className="st0" cx="331.2" cy={176} r="14.5" />
          </g>
          <path id="XMLID_6_" className="st0" d="M250,311.6c-97.6,0-100-85.4-100.1-86.3c-0.1-5.9,4.6-10.7,10.5-10.8c5.9,0,10.7,4.6,10.8,10.4
              c0.1,2.8,2.5,65.4,78.8,65.4c76.4,0,78.8-61.2,78.8-63.8c0.1-5.8,4.9-10.4,10.6-10.4c0.1,0,0.1,0,0.2,0c5.8,0.1,10.5,4.9,10.4,10.8
              C350,227.8,347.6,311.6,250,311.6z" />
          <path id="XMLID_7_" className="st0" d="M250,475.2c-124.2,0-225.2-101-225.2-225.2c0-124.2,101-225.2,225.2-225.2
              c124.2,0,225.2,101,225.2,225.2C475.2,374.2,374.2,475.2,250,475.2z M250,42.5C135.6,42.5,42.5,135.6,42.5,250
              S135.6,457.5,250,457.5S457.5,364.4,457.5,250S364.4,42.5,250,42.5z" />
          </g>
          <linearGradient id="linear-gradient" gradientUnits="userSpaceOnUse" 
            gradientTransform={`rotate(${this.state.angle})`}>
            <stop offset="0%" stopColor="#FE6B8B"/>
            <stop offset="50%" stopColor="#FF8E53"/>    
          </linearGradient>
      </svg>
    )
  }
}

export default Smile
