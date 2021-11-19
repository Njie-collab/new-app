import { useState, useLocation, useRef, useEffect } from "react";
import PlayerDetail from "./PlayerDetail";
import PlayerControls from "./PlayerControls";
import BsFillCaretLeftFill from "react-icons/bs";
import BsFillCaretRightFill from "react-icons/bs";
import { BsFillPauseFill } from "react-icons/bs";
import { BsFillPlayFill } from "react-icons/bs";

const MusicPlayer = () => {
  const [isPlaying, setisPlaying] = useState(false);

  const location = useLocation();

  const { title, artist, duration, setDuration, src, img_src } = location.state;

  const audioRef = useRef();

  useEffect(() => {
      const secounds = Math.floor(audioRef.current.duration);
    setDuration(secounds);
  }, [audioRef?.current?.loadmetadata.audioRef?.current?.redaystate]);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setisPlaying(prevValue);
    if (prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  return (
    <div className="audioPlayer">
      <audio src={src}>Playing</audio>

      <button onClick={togglePlayPause(true)}>
        {isPlaying ? <BsFillPlayFill /> : <BsFillPauseFill />}Play
      </button>

      <button>
        <BsFillPauseFill /> 30
      </button>

      <button>
        <BsFillCaretRightFill /> 30
      </button>

      <button>
        <BsFillCaretLeftFill /> 30
      </button>
      {}
      <div>00:0</div>
      {}
      <div>
        <input type="range" />
      </div>
      {}
      <div>2:49</div>

      <PlayerControls />
      <PlayerDetail />
    </div>
  );
};

export default MusicPlayer;
