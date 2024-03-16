import PoolIcon from "@mui/icons-material/Pool";
import { Box, Button, Grid, Typography } from "@mui/material";
const Feature = () => {
  return (
    <Box sx={{ display: "flex", borderRadius: "30px" }}>
      <Grid
        container
        sx={{
          margin: "20px !important",
          width: "380px!important",
          overflow: "hidden",
        }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {Array(20)
          .fill()
          .map((_, index) => (
            <Grid
              key={index}
              xs={3}
              sx={{ marginTop: "10px", width: "fix-content" }}
            >
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "0 40px",
                  height: "70px",
                  width: "78px",
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
                <PoolIcon />
                <Typography sx={{ fontSize: "10px", fontWeight: "700" }}>
                  Swimming Pool
                </Typography>
              </Button>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Feature;
