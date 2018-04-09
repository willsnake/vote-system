// @flow
import React, { Component } from 'react';

// Styles
import { StyledHeader } from './HeaderStyles';

class Header extends Component {
  render() {
    return <StyledHeader {...this.props}>{this.props.children}</StyledHeader>;
  }
}

export default Header;
