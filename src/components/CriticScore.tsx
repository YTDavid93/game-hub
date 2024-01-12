import styled from "styled-components"

const ScoreBoard = styled.div`
  margin-right: 15px;
  background: #9ca3af;
  padding: 3px 5px;
  border-radius: 4px;
  color: ${(props) => props.color};
`;

interface Props {
    score: number
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
  return (
    <ScoreBoard color={color}>
      {score}
    </ScoreBoard>
  )
}

export default CriticScore