import { RiseLoader } from 'react-spinners';
import styled from 'styled-components';
import { color } from 'utils/theme';

const LoaderThumb = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loader = () => {
  return (
    <LoaderThumb>
      <RiseLoader size="12" margin="2" color={color.accent} speedMultiplier="0.8" />
    </LoaderThumb>
  );
};
