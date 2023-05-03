'use client'
import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}
      justifyContent="flex-start"
      alignContent="center">
    
        <Grid item xs={12}>
          <Typography variant="body1">
            <Box component="span" fontWeight="bold">
              Welcome!
            </Box>
            </Typography>
            </Grid>
           
        <Grid item xs={4}>
        <Typography variant="body1">
          
            I am a front-end web developer with experience creating complex
            bespoke B2B web applications. 
            <br />
            <br />
            I am going blind and have had to
            abandon my law career for a career that will give me the opportunity
            to use my skills to help make the web more accessible for people
            with disabilities.
            </Typography>
            </Grid>
            <Grid item xs={5}>
          <Image
            src="/Images/Laughingshot.JPG"
            alt="Picture of David Rullo laughing at a phone"
            width={100}
            height={100}
           className="photo"
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="body1">
            
            Please check out the rest of my portfolio for some examples of my
            work and my most updated resume.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;
