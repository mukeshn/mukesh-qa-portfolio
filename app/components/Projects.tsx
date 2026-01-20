"use client";

import { Container, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";

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

      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid
            component="div"
            item
            xs={12}
            md={4}
            key={project.title}
          >
            <Card>
              <CardContent>
                <Typography fontWeight="bold">
                  {project.title}
                </Typography>
                <Typography color="text.secondary">
                  {project.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
