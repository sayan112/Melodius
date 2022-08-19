import React from 'react'
import LibrarySong from './librarySong'

// passing song here bcz we have to map is and sent indivisual component librarySOng 
const library = ({songs,setCurrentSong,audioref,isplaysong}) => {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            id={song.id}
            setCurrentSong={setCurrentSong}
            key={song.id}
            audioref={audioref}
            isplaysong={isplaysong}
          />
        ))}
      </div>
    </div>
  );
}

export default library
