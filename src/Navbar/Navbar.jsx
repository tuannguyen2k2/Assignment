import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import PopoverField from "../components/PopoverField";
import { category } from "./data";
import { useSelector } from "react-redux";
import { priceSelector } from "../store/selector";
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
  const price = useSelector(priceSelector);

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
                    buttonActive === item.label
                      ? "rgba(46, 41, 51, 0.08) 0px 2px 4px, rgba(71, 63, 79, 0.16) 0px 5px 10px"
                      : "none",
                },
              }}
            >
              {item.icon}
              <Typography
                sx={{
                  fontWeight: "bold",
                  width: item.label == "Price" ? "80px" : "100%",
                }}
              >
                {price && item.label == "Price" ? price : item.label}
              </Typography>
              <ArrowDropDownIcon />
            </Button>
            <PopoverField
              id={id}
              open={buttonActive === item.label}
              anchorEl={anchorEl}
              onClose={handleClose}
            >
              {item.popover}
            </PopoverField>
          </Box>
        ))}
      </Paper>
    </Box>
  );
};

export default Navbar;
