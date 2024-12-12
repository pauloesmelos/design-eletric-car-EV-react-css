import React from 'react';
import { FaCircle, FaPause, FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { data } from '../../data/data';
import './Hero.css';

const Hero = ({ index, playVideo, setPlayVideo, setIndex }) => {
  const handleIndex = (i) => {
    setIndex(i);
    setPlayVideo(false);
  }
  return (
    <section className="hero-container">
      <div className="hero">
        <div className="hero-items">
            {/* content */}
            <div>
                <h2 className="title left-1">
                    {data[index].title}
                </h2>
                <h4 className="sub-title left-2">
                    {data[index].description}
                </h4>
            </div>
            {/* button explore */}
            <div className="div-button-explore left-3">
                <button className="button-explore">
                    <span>
                        Explore the features
                    </span>
                    <div>
                        <FaArrowRightLong className="button-explore-icon" size={25} />
                    </div>
                </button>
            </div>
            {/* doots and play video */}
            <div className="doots-hero">
                {/* doots */}
                <ul className="items-doots">
                    {Array.from({
                        length: 3
                    }).map((_, i) => (
                        <li 
                            onClick={() => handleIndex(i)} 
                            key={i * Math.random()}
                        >
                            <FaCircle className={i === index ? "doot-active" : "doot-not-active"} />
                        </li>
                    ))}
                </ul>
                {/* play video */}
                <div>
                    <button onClick={() => setPlayVideo(video => !video)} className="button-play">
                        <div>
                            {playVideo ? (
                                <FaPause />
                            ) : (
                                <FaPlay />
                            )}
                        </div>
                        <span>See the video</span>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;