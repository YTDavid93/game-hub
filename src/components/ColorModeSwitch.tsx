import styled from "styled-components";
import MoonIcons from "./icons/MoonIcons";
import SunIcon from "./icons/SunIcons";

interface Props {
  onChange: () => void;
  theme: "dark" | "light";
}

const StyledButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const ColorModeSwitch = ({ onChange, theme }: Props) => {
  return (
    <StyledButton onClick={onChange}>
      {theme === "light" ? <MoonIcons /> : <SunIcon />}
    </StyledButton>
  );
};

export default ColorModeSwitch;
