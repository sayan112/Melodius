import React from 'react'

const librarySong = ({
  song,
  songs,
  id,
  setCurrentSong,
  audioref,
  isplaysong,
  
}) => {
  const songSeletechandeler = () => {
    const selectedsong = songs.filter((state) => state.id === id);
    console.log(selectedsong);
    setCurrentSong(selectedsong[0]);
     if(isplaysong)
     {
      const playpromise = audioref.current.play();
      if(playpromise!==undefined)
      {
        playpromise.then((audio)=>{
          audioref.current.play();
        })
      }
     }
  };
  return (
    <div onClick={songSeletechandeler} className="library-song">
      <img src={song.cover} alt="img" />
      <div className="song-desciption">
        <h3> {song.name} </h3>
        <h4> {song.artist} </h4>
      </div>
    </div>
  );
};

export default librarySong
