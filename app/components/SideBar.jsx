"use client";

import React from "react";
import { Box, Grid } from "@mui/material";
import Link from "next/link";




export default function Sidebar() {
  return (
    <Box className="sidebar">
      <Grid container row spacing={2} justifyContent="center" alignContent="flex-start">
        <Grid item xs={12}>
      <Link href="/">Home</Link>
        </Grid>
        <Grid item xs={12}>
            <Link href="/about">About</Link>
        </Grid>
        <Grid item xs={12}>
       <Link href="/projects">Projects</Link>
        </Grid>
        <Grid item xs={12}>
       <Link href="/resume">Resume</Link>
        </Grid>
      </Grid>
    </Box>
  );
}
