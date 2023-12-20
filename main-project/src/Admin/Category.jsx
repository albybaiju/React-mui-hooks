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

const Category = () => {
    const [category,setCategory]= useState('')
  return (
     <Box sx={{ display: "flex" }}>
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
        elevation={3}
          sx={{
            width: "500px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <Typography
              variant="h3"
              sx={{ margin: "auto", marginLeft: "10px",color:'grey' }}
            >
              Category
            </Typography>
            <CardContent>
              <Stack spacing={2} direction="row">
                <TextField
                  id="standard-basic"
                  label="Category"
                  variant="standard"
                  onChange={(event) =>setCategory(event.target.value)}
                ></TextField>
                <Button >Submit</Button>
              </Stack>
            </CardContent>
            {category}
          </div>
        </Card>
      </Paper>
    </Box>
  );
};

export default Category;
