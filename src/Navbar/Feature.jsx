import PoolIcon from "@mui/icons-material/Pool";
import { Box, Button, Grid, Typography } from "@mui/material";
const Feature = () => {
  return (
    <Box sx={{ display: "flex", borderRadius: "30px" }}>
      <Grid
        container
        sx={{
          margin: "0 20px 20px 0 !important",
        }}
        spacing={{ xs: 2 }}
        width={"430px!important"}
      >
        {Array(16)
          .fill()
          .map((_, index) => (
            <Grid
              item
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
