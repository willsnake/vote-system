// @flow
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Container, Message } from 'semantic-ui-react';

// Components
import { MainContainer, Header } from '../../components';

// Connect
import Connect from '../../util/connect';

// Styles
import { StyledInput } from './HomeStyles';

class Home extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { appState: { success, searchIne }, history } = nextProps;
    if (success === true) {
      setInterval(() => {
        history.push({
          pathname: '/cuadricula',
          search: `?ine=${searchIne}`,
          state: { app: { searchIne } }
        });
      }, 3000);
    }
  }

  handleChange(e, { value }) {
    const { changeSearchIneAction } = this.props;
    changeSearchIneAction(value);
  }

  render() {
    const { appState } = this.props;
    let color = appState.success ? 'green' : 'red';
    let icon = appState.success ? 'check' : 'search';
    return (
      <MainContainer>
        <Container text>
          <Header as="h1" content="Demo Sistema Votacion" fontSize={'4em'} margintop={'1.5em'} />
          <Header
            as="h2"
            content="Por favor, ingrese su numero de INE"
            fontSize={'1.7em'}
            margintop={'3em'}
          />
          <StyledInput
            loading={appState.loading}
            error={appState.error}
            disabled={appState.disabled}
            onChange={this.handleChange}
            success={appState.success}
            focus
            size="huge"
            icon={`${icon}`}
            placeholder="INE"
          />
          {appState.message.length > 0 ? (
            <Message color={`${color}`} header={appState.message} />
          ) : null}
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
