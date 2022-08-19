import React, { useState , useRef } from "react";
import { Player } from "./Component/Player.js";
import { Song } from "./Component/song.js";
import data from "./data.js";
import   "./styles/app.scss";
import Library from "./Component/library.js";
 import Nav from "./Component/Nav.js";


const App = () => {
  //state
    const audioref = useRef("null");
  const[songs , setSongs]=useState(data());
  const [currentSong,setCurrentSong]= useState(songs[0]);
  const [isplaysong , setIsplaysong]=useState(false);

    const [realTime, setRealTime] = useState({
      //object
      currentTime: 0,
      durationSong: 0,
    });
   console.log(songs);
   
   const timeupdatehandeler = (e) => {
     const current = e.target.currentTime;
     const duration = e.target.duration;
     // console.log(current);
     // console.log(duration);
     setRealTime({ ...realTime, currentTime: current, durationSong: duration });
   };
  return (
    <div className="App">
      <Nav />
      <Song currentSong={currentSong} />
      <Player
        audioref={audioref}
        currentSong={currentSong}
        setIsplaysong={setIsplaysong}
        isplaysong={isplaysong}
        realTime={realTime}
        setRealTime={setRealTime}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioref={audioref}
         isplaysong={isplaysong}
      />
      <audio
        onTimeUpdate={timeupdatehandeler}
        ref={audioref}
        src={currentSong.audio}
      />
    </div>
  );
}
 export default App;

