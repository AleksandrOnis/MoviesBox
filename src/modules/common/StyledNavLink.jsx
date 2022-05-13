import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyleNavLink = styled(NavLink)``;

export const StyledNavLink = props => {
  return <StyleNavLink {...props}>{props.children}</StyleNavLink>;
};
