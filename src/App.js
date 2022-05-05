import { useState } from 'react';

import forkifyThumbnail from './assets/forkify-thumbnail.png';
import maptyThumbnail from './assets/mapty-thumbnail.png';
import gmnThumbnail from './assets/guessmynumber-thumbnail.png';
import bankistThumbnail from './assets/bankist-thumbnail.png';
import ACMEthumbnail from './assets/ACME-thumbnail.png';
import compareBikes from './assets/compare-bikes.png';
import InfoContainer from './components/infoContainer/InfoContainer';

import Projects from './components/projects/Projects';
import Menu from './components/menu/Menu';
import './App.css';

const info = [
  {
    title: 'About Me',
    text: " Hi, I'm Zviad Mestvirishvili, I am a junior Front-End web developer from Georgia. I've been doing this for more than a year and worked on many projects. I also play guitar as a hobby and love gaming.",
  },
  {
    title: 'Education',
    text: "I'm self-taught Front-End Developer but also studied Computer Programming in Georgian University. I learned Web developing through Udemy courses, Youtube and Google.",
  },
];

const projects = [
  {
    title: 'Forkify',
    description:
      'Forkify is recipe searching website with over 1 million recipes. You can also upload your own recipe but it will be saved only on your device.',
    thumbnail: forkifyThumbnail,
    link: 'https://zm-forkify.netlify.app/',
  },
  {
    title: 'Mapty',
    description:
      'Mapty is website where you can set workout locations anywhere on the map. You can either set walking workout or bike workout which shows you different stats',
    thumbnail: maptyThumbnail,
    link: 'https://zm-mapty.netlify.app/',
  },
  {
    title: 'Guess My Number',
    description:
      'Guess my number is a simple game, where you need to guess random number between 1 and 20.',
    thumbnail: gmnThumbnail,
    link: 'https://zm-guessmynumber.netlify.app/',
  },
  {
    title: 'Bankist',
    description: 'Bankist is a app that replicates bank account managing app.',
    thumbnail: bankistThumbnail,
    link: 'https://zm-bankist.netlify.app/',
  },
  {
    title: 'ACME',
    description: 'ACME is fake shopping website.',
    thumbnail: ACMEthumbnail,
    link: 'https://acme-replica.netlify.app/',
  },
  {
    title: 'Compare Bikes',
    description:
      "Compare Bikes is website for comparing two motorbike stats. Only functionality works, it doesn't have any design",
    thumbnail: compareBikes,
    link: 'https://compare-bikes.netlify.app/',
  },
];

const App = () => {
  const [selected, setSelected] = useState();

  const selectItem = value => {
    setSelected(value);
  };

  return (
    <div className="main-container">
      <div className="heading-container">
        <h1>Zviad</h1>
        <h1>Mestvi.</h1>
      </div>
      <div className="divider"></div>
      {selected === 'skills' ? (
        <div className="wrapper">
          <InfoContainer data={'skills'} />
        </div>
      ) : (
        ''
      )}

      {selected === 0 || selected === 1 ? (
        <div className="wrapper">
          <InfoContainer data={info[selected]} />
        </div>
      ) : (
        ''
      )}

      {selected === 'projects' ? (
        <div className="wrapper">
          <Projects data={projects} />{' '}
        </div>
      ) : (
        ''
      )}

      <Menu selected={selected} selector={selectItem} />
    </div>
  );
};

export default App;
