"use client";

import { Container, Typography, Card, CardContent, Box } from "@mui/material";

const projects = [
  {
    title: "Web Automation Framework",
    desc: "Built a scalable Selenium + TestNG framework with CI integration.",
  },
  {
    title: "API Automation Suite",
    desc: "Automated REST APIs using REST Assured with Jenkins execution.",
  },
  {
    title: "End-to-End Test Strategy",
    desc: "Defined automation strategy covering UI, API, and integration layers.",
  },
];

export default function Projects() {
  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Projects
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, 1fr)",
          },
          gap: 3,
        }}
      >
        {projects.map((project) => (
          <Card key={project.title}>
            <CardContent>
              <Typography fontWeight="bold">
                {project.title}
              </Typography>
              <Typography color="text.secondary">
                {project.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
