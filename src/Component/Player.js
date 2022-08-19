import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faPlayCircle , faBackward , faForward, faPauseCircle } from '@fortawesome/free-solid-svg-icons'
import {  useState } from 'react'


export const Player = ({
  currentSong,
  setIsplaysong,
  isplaysong,
  audioref,
  realTime,
  setRealTime,
}) => {
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
        <FontAwesomeIcon icon={faBackward} size="2x" />
        <FontAwesomeIcon
          icon={!isplaysong ? faPlayCircle : faPauseCircle}
          onClick={playSong}
          size="2x"
        />
        <FontAwesomeIcon icon={faForward} size="2x" />
      </div>
    </div>
  );
};
