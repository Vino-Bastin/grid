import React, { useState } from "react";
import {
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Button,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState(10);
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  const onClickHandler = () => {
    alert(`Value: ${value}`);
    setValue(10);
  };

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width={matches ? "50%" : "100%"}
        height={matches ? "50%" : "100%"}
        p={2}
        borderRadius={2}
        backgroundColor="#CFD8DC"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Age"
            onChange={(e) => setValue(e.target.value)}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
          <Button
            variant="contained"
            onClick={onClickHandler}
            sx={{ m: 1, minWidth: 120 }}
          >
            Submit
          </Button>
        </FormControl>
        <Box width="80%">
          <Divider>OR</Divider>
        </Box>
        <Button
          variant="contained"
          onClick={() => navigate("/grid")}
          sx={{ m: 1 }}
        >
          Navigate to Grid
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
