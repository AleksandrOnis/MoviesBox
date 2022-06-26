import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = props => {
  return <StyleNavLink {...props}>{props.children}</StyleNavLink>;
};

const StyleNavLink = styled(NavLink)``;
