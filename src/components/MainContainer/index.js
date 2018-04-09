// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

// Styles
import { StyledSegment } from './MainContainerStyles';

class MainContainer extends Component {
  render() {
    return (
      <Responsive>
        <StyledSegment textAlign="center" vertical>
          {this.props.children}
        </StyledSegment>
      </Responsive>
    );
  }
}

MainContainer.propTypes = {};

export default MainContainer;
