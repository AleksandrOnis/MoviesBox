import styled from 'styled-components';

export const Wrap = props => {
  return <StyledWrap {...props}></StyledWrap>;
};

const StyledWrap = styled.div`
  display: flex;
  flex-direction: ${({ fd = 'row' }) => fd};
  justify-content: ${({ jc = 'center' }) => jc};
  align-items: ${({ ai = 'center' }) => ai};
  margin: ${({ m = 0 }) => m};
  padding: ${({ p = 0 }) => p};
  max-width: ${({ mw = 'auto' }) => mw};
  width: ${({ w = 'auto' }) => w};
  height: ${({ h = 'auto' }) => h};
  gap: ${({ g = 0 }) => g};
`;
