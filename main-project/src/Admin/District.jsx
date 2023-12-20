import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Style.css";
import {
  Box,
  Button,
  Card,
  CardContent,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const District = () => {
    const [district, setDistrict] = useState('')


    useEffect(() => {
    
    },[])


    useLayoutEffect(() => {
      console.log('game');
    },[district])
    
  return (
    <Box
      sx={{
        display: "flex",
        
       
      }}
    >
      <Paper
        elevation={3}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center",m: 1,
        width: "100%",
        height: "600px", }}
      >
        <Card
          sx={{
            width: "500px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Typography variant="h5">Districrt</Typography>
            <CardContent>
              <Stack spacing={2} direction="row">
                <TextField
                  id="standard-basic"
                  label="District"
                  variant="standard"
                  onChange={(event) => setDistrict(event.target.value)}
                />
                <Button variant="contained">Submit</Button>
              </Stack>
            </CardContent>
            {district}
          </div>
        </Card>
      </Paper>
    </Box>
  );
};

export default District;
