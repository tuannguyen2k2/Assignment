import { Box, Typography } from "@mui/material";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../store/slice/appSlice";
import { priceSelector } from "../store/selector";
const Price = () => {
  const dispatch = useDispatch();
  const handleChangeValue = (value) => {
    sessionStorage.setItem("price", value);
    dispatch(setPrice(value));
  };
  const price = useSelector(priceSelector);
  const dataSlider = [
    "$0-$100K",
    "$0-$200K",
    "$0-$400K",
    "$0-$600K",
    "$0-$800K",
    "$0-$1M",
    "$0-$1,5M",
    "$0-$2M",
    "$0-$5M",
    "$0-$10M",
    "$0-$20M",
    "$0-$30M",
    "$0-$40M",
    "$0-$50M",
    "$0-$100M",
  ];
  return (
    <Box sx={{ padding: "50px", display: "flex", flexDirection: "column" }}>
      <Typography
        sx={{ alignSelf: "center", margin: "0  0 28px 0", fontWeight: "bold" }}
      >
        Price Range
      </Typography>
      <CircularSlider
        label=" "
        labelColor="#000"
        knobColor="white"
        knobSize={40}
        progressColorFrom="#000"
        progressColorTo="#000"
        progressSize={40}
        trackColor="#eeeeee"
        trackSize={40}
        valueFontSize={"18px"}
        data={dataSlider}
        min={0}
        max={100}
        dataIndex={dataSlider.indexOf(price)}
        onChange={(value) => handleChangeValue(value)}
      />
    </Box>
  );
};

export default Price;
