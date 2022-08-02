import React from 'react';
import ReactJkMusicPlayer, {
  ReactJkMusicPlayerAudioListProps as AudioListProps,
} from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import './boombox.css';

const fade = {
  fadeIn: 1000,
  fadeOut: 1000,
};

const position = {
  top: 'auto',
  left: 'auto',
  right: '10px',
  bottom: '10px',
};

const audioList: AudioListProps[] = [
  {
    name: 'BIG3',
    musicSrc:
      'https://www.dropbox.com/s/gon0c67vs0mhbjq/Ice%20Cube%20-%20BIG3%20Season%203%20Theme%20Song.mp3?raw=1',
    cover: 'https://sefon.pro/img/artist_photos/ice-cube.jpg',
  },
];

const Boombox = () => {
  console.log(ReactJkMusicPlayer);
  return (
    <>
      <ReactJkMusicPlayer
        theme="auto"
        volumeFade={fade}
        showThemeSwitch={false}
        showDownload={false}
        drag={false}
        audioLists={audioList}
        defaultPosition={position}
      />
    </>
  );
};

export default Boombox;
