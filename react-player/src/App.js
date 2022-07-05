import React, {useState, useRef} from 'react';

import Player from './components/Player';
import Song from "./components/Song";
import Library from './components/Library';
import Nav from './components/Nav'

import './styles/app.scss' 

import data from './util';

function App() {
  //state
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime: current, duration});
  }
  
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  })

  const [libraryStatus, setLibraryStatus] = useState(false);

  const audioRef = useRef(null);

  return (
    <div className="App">
      {/* <h1>Music Player</h1> */}
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong}/>
      <Player setCurrentSong={setCurrentSong} songs={songs} setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currentSong}/>
      <Library libraryStatus={libraryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong}/>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
