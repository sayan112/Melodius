import React  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faPlayCircle , faBackward , faForward, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'


export const Player = ({
  currentSong,
  setIsplaysong,
  isplaysong,
  audioref,
  realTime,
  setRealTime,
  songs,
  setCurrentSong,
  setSongs,
}) => {
  // useeffect to update the whole song array

  useEffect(() => {
    const activesong = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(activesong);
  }, [currentSong]);

  // to grab any html elem use always "useref"

  // const playSong = () => {
  //   audioref.current.play();
  // };

  //eventhandeler

  const playSong = () => {
    if (isplaysong) {
      audioref.current.pause();
      setIsplaysong(!isplaysong);
    } else {
      audioref.current.play();
      setIsplaysong(!isplaysong);
    }
  };

  const getTime = (Time) => {
    return (
      Math.floor(Time / 60) + ":" + ("0" + Math.floor(Time % 60)).slice(-2)
    );
  };

  const dranghandeler = (e) => {
    audioref.current.currentTime = e.target.value;

    setRealTime({ ...realTime, currentTime: e.target.value });
  };

  const skiptrackhandeler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    console.log(currentIndex);
    if (direction === "skip-forword") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "skip-back") {
      if (currentIndex - 1 === -1) {
        setCurrentSong(songs[songs.length - 1]);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
  };

  return (
    <div className="player">
      <div className="time-control">
        <p> {getTime(realTime.currentTime)}</p>
        <input
          min={0}
          max={realTime.durationSong}
          value={realTime.currentTime}
          onChange={dranghandeler}
          type="range"
        />
        <p> {getTime(realTime.durationSong)} </p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skiptrackhandeler("skip-back")}
          icon={faBackward}
          size="2x"
        />
        <FontAwesomeIcon
          icon={!isplaysong ? faPlayCircle : faPauseCircle}
          onClick={playSong}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => skiptrackhandeler("skip-forword")}
          icon={faForward}
          size="2x"
        />
      </div>
    </div>
  );
};
