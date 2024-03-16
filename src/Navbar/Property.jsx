import { Box, Button, Grid, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
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
          width: "730px!important",
        }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array(20)
          .fill()
          .map((_, index) => (
            <Grid key={index} xs={3} sx={{ marginTop: "10px" }}>
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
                  "&:hover": {
                    backgroundColor: "rgb(161, 168, 164)",
                  },
                }}
              >
                <HomeIcon />
                <Typography sx={{ fontSize: "10px", fontWeight: "700" }}>
                  Any
                </Typography>
              </Button>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Property;
