import styled from 'styled-components';

export const Loader = () => {
  return (
    <LoaderThumb>
      <h1>Loading...</h1>
    </LoaderThumb>
  );
};

const LoaderThumb = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;
