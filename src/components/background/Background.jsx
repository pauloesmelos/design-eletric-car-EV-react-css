import React from 'react';
import Background1 from "../../assets/image1.png";
import Background2 from "../../assets/image2.png";
import Background3 from "../../assets/image3.png";
import Video from "../../assets/video1.mp4";
import './Background.css';

const Background = ({ index, playVideo }) => {
  const setBackground = (id, video) => {
    if(video) {
        return (
            <video autoPlay muted loop>
                <source src={Video} />
            </video>
        )
    }
    else if(id === 0) {
        return <img className='image-background' src={Background1} />
    }
    else if(id === 1) {
        return <img className='image-background' src={Background2} />
    }
    else if(id === 2) {
        return <img className='image-background' src={Background3} />
    }
  }
  return (
    <div className='background'>
      {setBackground(index, playVideo)}
    </div>
  )
}

export default Background;