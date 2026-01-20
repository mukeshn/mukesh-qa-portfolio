"use client";

import { Container, Typography, List, ListItem } from "@mui/material";

export default function Experience() {
  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Experience Highlights
      </Typography>

      <List>
        <ListItem>
          Designed and owned scalable automation frameworks used across multiple
          teams.
        </ListItem>
        <ListItem>
          Integrated automation suites into CI/CD pipelines for faster and safer
          releases.
        </ListItem>
        <ListItem>
          Reduced regression execution time by 50–60% through optimization and
          parallel execution.
        </ListItem>
        <ListItem>
          Collaborated with developers to shift testing earlier in the SDLC.
        </ListItem>
        <ListItem>
          Mentored junior QA engineers on automation best practices and framework
          design.
        </ListItem>
      </List>
    </Container>
  );
}
