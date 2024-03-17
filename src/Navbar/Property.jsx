import { Box, Button, Grid, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ButtonGrid from "../components/ButtonGrid";
const Property = () => {
  return (
    <Box sx={{ display: "flex", borderRadius: "30px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "20px",
          backgroundColor: "rgb(236, 239, 241)",
          borderRadius: "30px",
          height: "auto",
        }}
      >
        {Array(3)
          .fill()
          .map((_, index) => (
            <Button
              key={index}
              sx={{
                bgcolor: "white",
                padding: "0 40px",
                height: "50px",
                width: "150px",
                color: "black",
                textTransform: "none",
                fontWeight: "bold",
                fontSize: "14px",
                border: "1px solid rgb(224, 224, 224)",
                borderRadius: "100px",
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              Residental
            </Button>
          ))}
      </Box>
      <Grid
        container
        sx={{
          margin: "16px 20px 20px 50px !important",
        }}
        width={"730px"}
      >
        {Array(20)
          .fill()
          .map((_, index) => (
            <Grid item key={index} xs={3}>
              <ButtonGrid>
                <HomeIcon />
                <Typography sx={{ fontSize: "10px", fontWeight: "700" }}>
                  Any
                </Typography>
              </ButtonGrid>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Property;
