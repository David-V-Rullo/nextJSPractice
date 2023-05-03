"use client";
import { Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";

const ResumePage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        paddingTop: "2rem",
      }}
    >
      <Typography variant="h5">
        Resume:  
      </Typography>
      <Typography variant="body1" sx={{ mt:2 }}>
      Below is my most updated resume.
      <br></br>
      <br></br>
      Feel free to download my resume by clicking the download button in the PDF viewer below.
      </Typography>
      <Divider />
      <Box sx={{ border: 'none', width:'100%', maxWidth:"800px", height:"100vh", mt:3, p:5 }} component="iframe" src="/Resume2023.pdf" title="Resume" />
    </Box>
  );
};

export default ResumePage;
