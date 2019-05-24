import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SelectedCharacter extends Component {
  render() {
    return (
      <div className="selected-character">
        <div className={"slanted"} id={this.props.idName}>
        </div>
        <div className={"character"}></div>
      </div>
    )
  }
}

SelectedCharacter.propTypes = {
  idName: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
}

export default SelectedCharacter;