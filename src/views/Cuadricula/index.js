// @flow
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Container, Divider, Grid } from 'semantic-ui-react';

// Components
import { MainContainer, Header } from '../../components';

// Connect
import Connect from '../../util/connect';

// Styles
import { StyledGrid } from './CuadriculaStyles';

const { Row, Column } = Grid;

class Cuadricula extends Component {
  render() {
    return (
      <MainContainer>
        <Container text>
          <StyledGrid centered>
            <Header as="h1" fontSize={'4em'} margintop={'0.2em'}>
              Plantilla para presidente
            </Header>
            <Header as="h2" fontSize={'1.7em'} margintop={'0.5em'}>
              Seleccione a su representante deseado
            </Header>
          </StyledGrid>
        </Container>
        <Divider hidden />
        <Container>
          <Grid padded centered textAlign="center">
            <Row columns={2}>
              <Column>Morena</Column>
              <Column>PAN</Column>
            </Row>
            <Row columns={2}>
              <Column>PRI</Column>
              <Column>Partido Independiente</Column>
            </Row>
            <Row columns={1}>
              <Column />
            </Row>
          </Grid>
        </Container>
      </MainContainer>
    );
  }
}

Cuadricula.propTypes = {};

let cuadricula = Connect(Cuadricula);

export default cuadricula;
