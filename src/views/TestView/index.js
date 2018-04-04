// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container, Icon } from 'semantic-ui-react';

// Components
import { MainContainer } from '../../components';

// Styles
import { StyledHeader, StyledInput } from './TestViewStyles';

class TestView extends Component {
  render() {
    return (
      <MainContainer>
        <Container text>
          <StyledHeader
            as="h1"
            content="Demo Sistema Votacion"
            fontSize={'4em'}
            margintop={'1.5em'}
          />
          <StyledHeader
            as="h2"
            content="Por favor, ingrese su numero de INE"
            fontSize={'1.7em'}
            margintop={'3em'}
          />
          <StyledInput label={<Icon />} placeholder="INE" />
        </Container>
      </MainContainer>
    );
  }
}

TestView.propTypes = {
  children: PropTypes.node
};

export default TestView;
