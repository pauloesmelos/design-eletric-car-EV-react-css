import React from 'react';
import Background from '../components/background/Background';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  const [index, setIndex] = React.useState(2); // index background
  const [playVideo, setPlayVideo] = React.useState(false); // play video background

  return (
    <main>
      <Background index={index} playVideo={playVideo} />
      <Navbar />
      <Hero 
        index={index} 
        playVideo={playVideo} 
        setPlayVideo={setPlayVideo}
        setIndex={setIndex}
      />
    </main>
  )
}

export default Home;