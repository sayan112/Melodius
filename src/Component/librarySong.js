import React from 'react'

const librarySong = ({
  song,
  songs,
  id,
  setCurrentSong,
  audioref,
  isplaysong,
  setSongs,
}) => {
  const songSeletechandeler = () => {

//
    const selectedsong = songs.filter((state) => state.id === id);
    console.log(selectedsong);
    setCurrentSong(selectedsong[0]);
    if (isplaysong) {
      const playpromise = audioref.current.play();
      if (playpromise !== undefined) {
        playpromise.then((audio) => {
          audioref.current.play();
        });
      }
    }
    // 
    const activesong = songs.map((song)=>{
       if(song.id===id)
       {
        return {
          ...song,active:true
        }
       }
       else{
         return {
           ...song,
           active: false,
         };
       }
     

    })
       setSongs(activesong);

  };
  return (
    <div
      onClick={songSeletechandeler}
      className={`library-song ${song.active ? "selected" : ""}`}
    >
      <img src={song.cover} alt="img" />
      <div className="song-desciption">
        <h3> {song.name} </h3>
        <h4> {song.artist} </h4>
      </div>
    </div>
  );
};

export default librarySong
