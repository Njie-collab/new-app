import { useLocation } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player";
import {useState,useRef}from "react"

const PlayerDetail = () => {
const location = useLocation()
const audioRef=useRef() 
const[isPlaying,setisPlaying]=useState(false)


const { title, artist, duration, src, img_src,price } = location.state;

const togglePlayPause = () => {
  
  setisPlaying(isPlaying);
  if (isPlaying) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
};

    return (
      <div
        className="musicInfo"
        style={{ marginLeft: "10px", backgroundColor: "light_blue" }}
        key
      >
        <h1>Music Store</h1>
        <h3>Name:{artist}</h3>
        <p>Titel:{title}</p>
        <p>Duration:{duration}</p>
        <h3>Price{price}</h3>
        <h3>Src{img_src}</h3>
        
        <ReactAudioPlayer
          style={{
            backgroundColor: "red",
            border: "10px",
            padding: "10px",
            margin: "10px",
          }}
          src={src}
          autoPlay
          controls
          pause
        />
        <button onClick={togglePlayPause}>click Here</button>
      </div>
    );
}

export default PlayerDetail
