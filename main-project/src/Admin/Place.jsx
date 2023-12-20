import React, { useState } from "react";
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

const Place = () => {
    const [place,setPlace]= useState('')
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: 1,
          width: "100%",
          height: "600px",
        }}
      >
        <Card
          elevation={4}
          sx={{
            width: "500px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Typography
              variant="h3"
              sx={{ margin: "auto", marginLeft: "10px" }}
            
            >
              Place
            </Typography>
            <CardContent>
              <Stack spacing={2} direction="row">
                <TextField
                  id="standard-basic"
                  label="place"
                  variant="standard"
                  onChange={(go)=>setPlace(go.target.value)}
                ></TextField>

                <Button variant="contained">Submit</Button>
              </Stack>
            </CardContent>
            {place}
          </div>
        </Card>
      </Paper>
    </Box>
  );
};

export default Place;
