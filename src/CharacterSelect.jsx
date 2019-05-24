import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CharacterSelect extends Component {
  render() {
    let classNames = "character-select " + this.props.className;
    return (
      <div className={classNames}>
      </div>
    )
  }
}

export default CharacterSelect;