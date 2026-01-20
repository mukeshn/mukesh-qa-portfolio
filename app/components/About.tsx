"use client";

import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About Me
      </Typography>

      <Typography>
        I am a Senior SDET with 9+ years of experience in designing, building, and
        scaling test automation frameworks for modern web applications.
        <br /><br />
        I specialize in UI, API, and end-to-end automation using Selenium,
        Playwright, and Cypress, and I actively integrate quality into CI/CD
        pipelines.
        <br /><br />
        I enjoy mentoring engineers, defining automation strategies, and working
        closely with development and DevOps teams to ensure quality is built into
        the system from day one.
      </Typography>
    </Container>
  );
}
