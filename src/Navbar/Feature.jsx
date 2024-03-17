import PoolIcon from "@mui/icons-material/Pool";
import { Box, Grid, Typography } from "@mui/material";
import ButtonGrid from "../components/ButtonGrid";
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
              <ButtonGrid
                sx={{
                  width: "78px",
                }}
              >
                <PoolIcon />
                <Typography sx={{ fontSize: "10px", fontWeight: "700" }}>
                  Swimming Pool
                </Typography>
              </ButtonGrid>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default Feature;
