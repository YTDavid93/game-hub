import styled from "styled-components";

const Main = styled.div``;

const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
const Spinner = styled.div`
  border-top: 3px #52525b solid;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const GenreListSpinner = () => {
  return (
  <Main>
    <LoadingWrapper>
      <h3>Loading...</h3>
      <Spinner />
    </LoadingWrapper>
  </Main>
  )
};

export default GenreListSpinner;
