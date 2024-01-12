import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import styled from "styled-components";
import { IconType } from "react-icons";


const Icons = styled.span`
  color: #6b7280;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;

const PlatformIcon = styled.div`
   padding: 0px 15px;
`

interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    Linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid
  }
  return (
    <PlatformIcon>
      {platforms.map((platform) => (
        <Icons as={iconMap[platform.slug]} />
      ))}
    </PlatformIcon>
  );
};

export default PlatformIcons;
