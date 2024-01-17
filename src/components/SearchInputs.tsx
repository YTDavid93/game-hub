import styled from "styled-components";

const InputItem = styled.input`
  width: 90%;
  border-radius: 20px;
  border: none;
  height: 45px;
  padding: 15px;
  background-color: #3f3f46;
  color: #fff;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

const SearchInputs = () => {
  return (
   <>
    <InputItem type="text" placeholder="Search games..." />  
   </> 
  )
}

export default SearchInputs;