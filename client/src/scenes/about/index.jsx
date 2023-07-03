import Navbar from "scenes/navbar";
import GoogleMaps from "./GoogleMaps";
import {
  ManageAccountsOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";


const About = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 12%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="1.5rem"
        justifyContent="space-between"
      >
        
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          
        <GoogleMaps/>

        </Box>

<Box>

<WidgetWrapper>
  {/* Prvi red */}
  <FlexBetween gap="0.5rem" pb="1.1rem">
    <FlexBetween gap="1rem">
      <Box>
        <Typography
          variant="h4"
          fontWeight="500"
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >

        </Typography>
        <Typography>O nama</Typography>
      </Box>
    </FlexBetween>
    <ManageAccountsOutlined />
  </FlexBetween>

  <Divider />

  {/* Drugi red */}
  <Box p="1rem 0">
    <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
      <LocationOnOutlined fontSize="large" />
      <Typography> Fakultet organizacionih nauka, Beograd</Typography>
    </Box>
    <Box display="flex" alignItems="center" gap="1rem">
      <WorkOutlineOutlined fontSize="large" />
      <Typography>ITEH projekat - Drustvena mreza</Typography>
    </Box>

    

  </Box>

  

  <Divider />

  {/* Treci red */}
  <Box p="1rem 0">
    <FlexBetween mb="0.5rem">
      <Box display="flex" alignItems="center" gap="1rem">
        <Typography>Žarko, Nikola, Aleksa, 2023.</Typography>
    </Box>
    </FlexBetween>
    <FlexBetween>
      <Box display="flex" alignItems="center" gap="1rem">
        <Typography>Julski ispitni rok</Typography>
    </Box>
    </FlexBetween>
  </Box>

  <Divider />

  
</WidgetWrapper>

</Box>
        
      </Box>
    </Box>
  );
};

export default About;