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
      <h1>Loading...</h1>
    </LoaderThumb>
  );
};
