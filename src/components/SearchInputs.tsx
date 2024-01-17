import { useRef } from "react";
import styled from "styled-components";


const InputItem = styled.input`
  width: 100%;
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

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInputs = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null)
  return (
   <form onSubmit={(e) => {
      e.preventDefault();
      if(ref.current) onSearch(ref.current.value)
    }}>
    <InputItem ref={ref} type="text" placeholder="Search games..." />  
   </form> 
  )
}

export default SearchInputs;