import styled from "styled-components";
import getCroppedImageUrl from "./services/image-url";
import useGenres from "../hooks/useGenres";


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

const Text = styled.p`
   margin: 0px 0px 0px 8px;
   font-size: 1rem;
`

const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack>
            <Image src={getCroppedImageUrl(genre.image_background)} />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default GenreList
