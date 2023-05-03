'use client'

import React from "react";
import { Typography, Grid } from "@mui/material";

const AboutPage = () => {
  return (
    <div className="mainContent">
      <Grid container spacing={2}>       
        <Grid item xs={12} display="flex" alignContent="center">
          <Typography variant="h5">About Me:</Typography>
        </Grid>
        <Grid item xs={12} display="flex" alignContent="center">
          <Typography variant="body1">
            I got my first computer when I was in the eighth grade. This was,
            to this day, the best Christmas gift I ever received. I poured
            every second into tinkering with that computer - a custom-built
            Intel 486 33mhz desktop with a whopping 2MB of RAM and a
            bottomless 285MB hard drive.
            <br />
            <br />
            My first program was written in a DOS text editor; using QBASIC I
            was able to make a program that let me launch all of my games with
            a couple button pushes.
            <br />
            <br />
            I never stopped enjoying playing and tinkering with computers, but
            when it came time to decide to do after high school I opted to
            join the Marines. During my time in the Marine Corps, I received a
            commendation from the Admiral of the U.S. Navy 7th Fleet for
            turning a bunch of old computers found in garbage into functioning
            machines that my Marines could use to stay in touch with friends
            and family via a new fangled technology called the "Internet".
            <br />
            <br />
            Since my time in the Marine Corps, I was a police officer for
            fourteen years and I am also a practicing attorney and prosecutor
            in New Jersey.
            <br />
            <br />
            Unfortunately, in 2017, I was diagnosed with a degenerative retina
            disease called Retinitis Pigmentosa. This disease has chipped away
            at my vision and left me almost totally blind. This forced me to
            reevaluate what I wanted to do. Given my lifelong interest in
            computers and a newfound understanding of the difficulties that
            living with a disability can be, I decided to become a full-stack
            web developer with a focus on UI/UX design and accessibility.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default AboutPage;
