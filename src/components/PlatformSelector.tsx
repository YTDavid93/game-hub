import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import usePlatform from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";
import { MenuList } from "@mui/material";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  if (error) return null;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <div>
      <Button onClick={handleClick}>{selectedPlatform?.name || 'Platform'}</Button>
      <Menu
        sx={{
          top: 25,
        }}
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              onClick={() => onSelectPlatform(platform)}
              key={platform.id}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default PlatformSelector;
