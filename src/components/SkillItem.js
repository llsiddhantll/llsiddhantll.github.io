import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import '../css/skill-item.css';

export default class SkillItem extends Component {
  render () {
    return (
      <div className='skill-item'>
        <div className='regular skill-item__title'>
          { this.props.title }
        </div>

        <div className='skill-item__skills'>
          {
            _.map(this.props.skills, skill => {
              return (
                <div
                  className='regular skill-item__skill'
                  key={skill}
                >
                  { skill }
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
};

SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
}