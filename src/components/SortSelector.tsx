import { Button, Menu, MenuItem, MenuList } from "@mui/material";
import { useState } from "react";


interface Props {
    onSelectOrders: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({ onSelectOrders, sortOrder }: Props) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
      };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const sortOrders = [
      { value: "", label: "Relevance" },
      { value: "-added", label: "Date added" },
      { value: "name", label: "Name" },
      { value: "-released", label: "Release Date" },
      { value: "-metacritic", label: "Popularity" },
      { value: "-rating", label: "Avearge Rating" },
    ];

    const currentShortOrder = sortOrders.find(order => order.value === sortOrder)

    return (
      <div>
        <Button onClick={handleClick}>Order by: {currentShortOrder?.label || 'Relevance'}</Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuList>
            {sortOrders.map((Order) => (
              <MenuItem
                onClick={() => onSelectOrders(Order.value)}
                key={Order.value}
                value={Order.value}
              >
                {Order.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    );
}

export default SortSelector