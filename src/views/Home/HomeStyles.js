import styled from 'styled-components';
import { Input } from 'semantic-ui-react';

const StyledInput = styled(Input)`
  margin-top: 25px;
  input {
    border-color: ${props => (props.success === true ? 'green' : null)}!important;
  }

  i {
    color: ${props => (props.success === true ? 'green' : null)}!important;
  }
`;

export { StyledInput };
