import { Button, Menu, MenuItem, MenuList } from "@mui/material";
import { useState } from "react";

const SortSelector = () => {

     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
      const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };

      const handleClose = () => {
        setAnchorEl(null);
      };
    return (
      <div>
        <Button onClick={handleClick}>Order By: Relevance</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuList>
            <MenuItem>Item 1</MenuItem>
            <MenuItem>Item 2</MenuItem>
            <MenuItem>Item 3</MenuItem>
          </MenuList>
        </Menu>
      </div>
    );
}

export default SortSelector