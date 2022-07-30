import React from 'react';
import ReactJkMusicPlayer, {
  ReactJkMusicPlayerAudioListProps as AudioListProps,
} from 'react-jinke-music-player';
import 'react-jinke-music-player/assets/index.css';
import './boombox.css';

const fade = {
  fadeIn: 2500,
  fadeOut: 2500,
};

const position = {
  top: 'auto',
  left: 'auto',
  right: '10px',
  bottom: '10px',
};

const audioList: AudioListProps[] = [
  {
    name: 'Harder-Better',
    musicSrc:
      'https://vmlbox.com/wp-content/uploads/2022/03/Daft-Punk-Harder-Better-Faster-Vmlboxcom.mp3',
    cover: '',
  },
  {
    name: 'Lose-Yourself',
    musicSrc: 'https://vmlbox.com/wp-content/uploads/2022/03/Eminem-Lose-Yourself-Vmlboxcom.mp3',
    cover: '',
  },
  {
    name: 'Eye-Of-The-Tiger',
    musicSrc:
      'https://vmlbox.com/wp-content/uploads/2022/07/Survivor-Eye-Of-The-Tiger-vmlboxcom.mp3',
    cover: '',
  },
];

const Boombox = () => {
  console.log(ReactJkMusicPlayer);
  return (
    <>
      <ReactJkMusicPlayer
        theme="auto"
        glassBg
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
