/* eslint-disable react/prop-types */
import { Popover } from "@mui/material";

const PopoverField = ({
  id,
  open,
  anchorEl,
  handleClose,
  children,
  ...props
}) => {
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      sx={{ bgcolor: "transparent" }}
      {...props}
    >
      {children}
    </Popover>
  );
};

export default PopoverField;
