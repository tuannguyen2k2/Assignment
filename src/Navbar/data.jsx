import LocationOnIcon from "@mui/icons-material/LocationOn";
import Property from "./Property";
import Feature from "./Feature";
import Price from "./Price";
import Location from "./Location";
import HomeIcon from "@mui/icons-material/Home";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import TuneIcon from '@mui/icons-material/Tune';
export const category = [
  {
    icon: <LocationOnIcon />,
    label: "Location",
    popover: <Location />,
  },
  {
    icon: <HomeIcon />,
    label: "Type of property",
    popover: <Property />,
  },
  {
    icon: <LocalOfferIcon />,
    label: "Price",
    popover: <Price />,
  },
  {
    icon: <TuneIcon />,
    label: "Features",
    popover: <Feature />,
  },
];
