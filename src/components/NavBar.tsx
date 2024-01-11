import { ReactNode } from "react";
import styled from "styled-components";
import logo from "../assets/logo.webp";

interface Props {
  children: ReactNode;
}

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;
const Image = styled.img`
  width: 60px;
`;

const NavBar = ({ children }: Props) => {
  return (
    <Flex>
      <Image src={logo} />
      {children}
    </Flex>
  );
};

export default NavBar;
