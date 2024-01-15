import styled from "styled-components";
import usePlatform from "../hooks/usePlatforms";

const Select = styled.select`
  border-radius: 5px;
  background-color: #3f3f46;
  color: #fff;
  font-size: 1rem;
  padding: 10px 16px;
`;

const PlatformSelector = () => {
   const { data, error } = usePlatform()

   if (error) return null;
  return (
    <Select>
      <option disabled selected hidden>Platforms</option>
      {data.map((platform) => (
        <option key={platform.id}>{platform.name}</option>
      ))}
    </Select>
  );
}

export default PlatformSelector