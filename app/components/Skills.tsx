"use client";

import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const skills = [
  { title: "Automation", items: "Selenium, Playwright, Cypress" },
  { title: "Programming", items: "Java, JavaScript, Python" },
  { title: "Frameworks", items: "TestNG, Cucumber, Jest, REST Assured" },
  { title: "CI / DevOps", items: "Jenkins, GitHub Actions, Docker" },
  { title: "Practices", items: "Test Strategy, CI Quality Gates, Code Reviews" },
];

export default function Skills() {
  return (
    <Container sx={{ mt: 12 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Skills
      </Typography>

      <Grid container spacing={3}>
        {skills.map((skill) => (
          <Grid item xs={12} md={4} key={skill.title}>
            <Card>
              <CardContent>
                <Typography fontWeight="bold">{skill.title}</Typography>
                <Typography color="text.secondary">{skill.items}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
