import { useRef } from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const InputItem = styled.input`
  width: 100%;
  border-radius: 20px;
  border: none;
  height: 45px;
  padding: 15px;
  background-color: #3f3f46;
  color: #fff;
  font-size: 1rem;
  padding: 28px;

  &:focus {
    outline: none;
  }
`;

const Div = styled.div`
  width: 100%;
  position: relative;
`;

const inconStyle = {
  position: "absolute",
  top: "18px",
  left: "5px",
  width: "15px",
  cursor: "Pointer",
};

interface Props {
  onSearch: (searchText: string) => void;
}


const SearchInputs = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit={
      (e) => {e.preventDefault()
      if(ref.current) onSearch(ref.current.value) }
    }>
      <Div>
        <BsSearch style={inconStyle} />
        <InputItem ref={ref} type="text" placeholder="Search games..." />
      </Div>
    </form>
  );
};

export default SearchInputs;
