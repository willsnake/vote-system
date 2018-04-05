import styled from 'styled-components';
import { Header, Input } from 'semantic-ui-react';

const StyledHeader = styled(Header)`
  font-size: ${props => (props.fontSize ? props.fontSize : '4em')}!important;
  font-weight: ${props => (props.fontweight ? props.fontweight : 'normal')}!important;
  margin-bottom: ${props => (props.marginbottom ? props.marginbottom : '0')}!important;
  margin-top: ${props => (props.margintop ? props.margintop : '3em')}!important;
  color: ${props => (props.color ? props.color : 'black')}!important;
`;

const StyledInput = styled(Input)`
  margin-top: 25px;
`;

export { StyledHeader, StyledInput };
