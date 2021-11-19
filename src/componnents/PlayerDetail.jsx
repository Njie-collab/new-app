import { useLocation } from "react-router-dom"
import ReactAudioPlayer from "react-audio-player";
import {useState,useRef}from "react"

const PlayerDetail = () => {
const location = useLocation()
const audioRef=useRef() 
const[isPlaying,setisPlaying]=useState(false)


const { title, artist, duration, src, img_src } = location.state;

const togglePlayPause = () => {
  
  setisPlaying(isPlaying);
  if (isPlaying) {
    audioRef.current.play();
  } else {
    audioRef.current.pause();
  }
};

    return (
      <div>
        <h3>{title}</h3>
        <h2>{artist}</h2>
        <h3>{duration}</h3>
        <h3>{img_src}</h3>
        <ReactAudioPlayer src={src} autoPlay controls />
        <button onClick={togglePlayPause}>click</button>
      </div>
    );
}

export default PlayerDetail
