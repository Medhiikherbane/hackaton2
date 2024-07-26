import { useRef, useState, useEffect } from 'react';
import audioPigeon from "../assets/audio/Pigeon ramier.mp3";

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(prevState => !prevState);
  };

  return (
    <div>
      <audio ref={audioRef} loop>
        <source src={audioPigeon} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default AudioPlayer;