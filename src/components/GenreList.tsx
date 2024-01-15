import styled from "styled-components";
import getCroppedImageUrl from "./services/image-url";
import useGenres, { Genre } from "../hooks/useGenres";


const List = styled.ul`
  list-style: none;
  padding-left: 0px;
`

const ListItem = styled.li`
  padding-bottom: 10px;
`

const HStack = styled.div`
   display: flex;
   align-items: center;
`
const Image = styled.img`
  object-fit: cover;
  width: 32px;
  height: 32px;
  border-radius: 8px;
`;

const Button = styled.button<{ $isSelected: boolean}>`
  margin: 0px 0px 0px 8px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  font-weight: ${({ $isSelected}) => ($isSelected ? 'bold' : 'normal')};
`;

interface Props {
   onSelectGenre: (genre: Genre) => void;
   selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre}: Props) => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} />
            <Button
              $isSelected={genre.id === selectedGenre?.id}
              onClick={() => onSelectGenre(genre)}
              as="a"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList
