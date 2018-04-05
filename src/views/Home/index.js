import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Icon } from 'semantic-ui-react';

// Components
import { MainContainer } from '../../components';

// Connect
import Connect from '../../util/connect';

// Styles
import { StyledHeader, StyledInput } from './HomeStyles';

class Home extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, { value }) {
    const { changeSearchIneAction, appState } = this.props;
    console.log('appState', appState);
    changeSearchIneAction(value);
  }

  render() {
    const { appState } = this.props;
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
          <StyledInput
            loading={appState.loading}
            error={appState.error}
            onChange={this.handleChange}
            focus
            min={13}
            max={13}
            size="huge"
            icon="search"
            placeholder="INE"
          />
        </Container>
      </MainContainer>
    );
  }
}

Home.propTypes = {
  changeSearchIneAction: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired
};

let home = Connect(Home);

export default home;
