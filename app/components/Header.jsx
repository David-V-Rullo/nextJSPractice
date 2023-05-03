"use client";
import { useTheme } from "@mui/material/styles";
import React from "react";
import Image from "next/image";
import { Typography, Grid, Box } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ textAlign: "center", pt: 10 }}>
      <Grid
        container
        display="flex"
        spacing={5}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={8}>
          <Typography variant="h2">{`<David Rullo />`}</Typography>
          <Typography variant="h5">{`<Front-End Web Developer />`}</Typography>
          <Typography variant="h5">{`<Accessibilty Advocate />`}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Image
            src="/images/Headshot.jpg"
            alt="Profile Image of David Rullo"
            width={200}
            height={220}
            className="headshot"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
