/* eslint-disable react/prop-types */
import { Button } from "@mui/material";

const ButtonGrid = ({ children, sx, ...props }) => {
  return (
    <Button
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0 40px",
        height: "70px",
        width: "172px",
        color: "black",
        textTransform: "none",
        fontWeight: "bold",
        fontSize: "14px",
        border: "1px solid rgb(224, 224, 224)",
        borderRadius: "20px",
        margin: "4px 0",
        "&:hover": {
          backgroundColor: "rgb(161, 168, 164)",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonGrid;
