import React, { useState } from "react";
import { Box, Button, Card, CardContent, Paper, Stack, TextField, Typography } from "@mui/material"

const Subcategory =() =>{
    const [subcat,setSubcat]= useState('')
    return(
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
              variant="h4"
              sx={{ margin: "auto", marginLeft: "10px", color:"grey" }}
            >
              Subcategory
            </Typography>
            <CardContent>
              <Stack spacing={2} direction="row">
                <TextField
                  id="standard-basic"
                  label="Subcategory"
                  variant="standard"
                  onChange={(show)=>setSubcat(show.target.value)}
                ></TextField>
                <Button variant="contained">Submit</Button>
              </Stack>
            </CardContent>
            {subcat}
          </div>
        </Card>
      </Paper>
    </Box>
  );
};
 
export default Subcategory