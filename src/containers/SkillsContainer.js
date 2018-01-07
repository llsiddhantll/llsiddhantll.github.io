import React, { Component } from 'react';

import HeaderContainer from './HeaderContainer';
import SkillItem from '../components/SkillItem';
import Shape from '../components/Shape';

import '../css/skills.css';

let skills = [
  {
    title: 'Frontend',
    items: [
      'HTML + CSS',
      'Vanilla Javascript',
      'React',
      'Redux',
      'MobX',
      'Backbone',
      'Electron',
      'React Native'
    ]
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express',
      'Sails',
      'MongoDB',
      'Redis'
    ]
  },
  {
    title: 'Tests & Tooling',
    items: [
      'Mocha',
      'Enzyme',
      'Webpack',
      'Babel',
      'Gulp'
    ]
  },
  {
    title: 'Design',
    items: [
      'Illustrator',
      'Paint'
    ]
  },
  {
    title: 'Miscellaneous',
    items: [
      'Electric Guitar',
      'Killer Spotify Playlists',
      'Rocket League',
      'Reddit',
      'MINECRAFT',
      'Meme comebacks'
    ]
  }
]

export default class SkillsContainer extends Component {
  render () {
    return (
      <div className='skills-container'>
        <HeaderContainer 
          selected='skills'
        />
        <div className='skills-content'>
          <div className='skills--1'>
            <SkillItem
              title={skills[0].title}
              skills={skills[0].items}
            />
            <SkillItem
              title={skills[1].title}
              skills={skills[1].items}
            />
            <SkillItem
              title={skills[2].title}
              skills={skills[2].items}
            />
            <div className='purple-shape-1 skills-purple' />
          </div>

          <div className='skills--2'>
            <div className='right-arrows skills-arrow'>
              <Shape rightArrows />
              <Shape rightArrows />
              <Shape rightArrows />
            </div>
            <SkillItem
              title={skills[3].title}
              skills={skills[3].items}
            />
            <SkillItem
              title={skills[4].title}
              skills={skills[4].items}
            />
          </div>
        </div>
      </div>
    );
  }
};