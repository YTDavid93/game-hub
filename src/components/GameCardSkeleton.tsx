import { Skeleton, Card } from "@mui/material";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" width="300px" height="200px" sx={{
        borderRadius: "5px"
      }} />
      <Skeleton variant="text" width="250px" />
      <Skeleton variant="text" width="200px" />
    </Card>
  );
};

export default GameCardSkeleton;
