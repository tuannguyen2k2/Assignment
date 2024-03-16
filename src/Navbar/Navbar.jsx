import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button, Paper, Popover } from "@mui/material";
import { useState } from "react";
import Property from "./Property";
import { category } from "./data";
const Navbar = () => {
  const [buttonActive, setButtonActive] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (label, event) => {
    setButtonActive(label);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setButtonActive(null);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "my-popover" : undefined;
  return (
    <Box sx={{ width: "1080px", height: "70px", borderRadius: "500px" }}>
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: "500px",
          bgcolor: buttonActive ? "rgb(221 221 221)" : "white",
          display: "flex",
        }}
      >
        {category.map((item) => (
          <Box
            key={item.label}
            sx={{
              minWidth: "64px",
              width: "fix-content",
            }}
          >
            <Button
              onClick={(e) => handleClick(item.label, e)}
              sx={{
                bgcolor: buttonActive == item.label && "white",
                textTransform: "none",
                height: "100%",
                padding: "11px 50px",
                fontSize: "16px",
                borderRadius: "100px",
                border: "none",
                color: "black",
                fontWeight: "bold",
                fontFamily: "Nunito, sans-serif",
                "&:hover": {
                  backgroundColor:
                    buttonActive != item.label ? "rgb(221 221 221)" : "white",
                },
                "&:focus": {
                  outline: "none",
                  boxShadow:
                    "rgba(46, 41, 51, 0.08) 0px 2px 4px, rgba(71, 63, 79, 0.16) 0px 5px 10px",
                },
              }}
            >
              {item.icon}
              {item.label}
              <ArrowDropDownIcon />
            </Button>
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
            >
              <Property />
            </Popover>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Navbar;
