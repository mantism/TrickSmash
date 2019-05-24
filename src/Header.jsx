import React, {Component} from 'react';
import backbutton from './backbutton.png';
import v2logo from './V2Logo.png';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    let classNames = "header " + this.props.className;

    return (
      <div className={classNames}>
        <div className="back-button slanted">
          <img src={backbutton} alt="back-button" id="back-arrow"/>
          <div id="forwardSlash"></div>
          <img src={v2logo} alt="v2logo" id="v2logo"/>
        </div>
        <div className="battle-label slanted">
          <div className="battle-inner-label">
            <div className="textbox">
              {this.props.title}
              {this.props.battleMode}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  battleMode: PropTypes.string.isRequired,
}

export default Header;