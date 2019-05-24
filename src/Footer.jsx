import React, {Component} from 'react';
import SelectedCharacter from './SelectedCharacter';
import PropTypes from 'prop-types';

class Footer extends Component {
  render() {
    let classNames = "footer " + this.props.className;
    return (
      <div className={classNames}>
        <SelectedCharacter idName="blue" character="Mikael"/>
        <SelectedCharacter idName="red" character="Mike"/>
      </div>
    )
  }
}

export default Footer;