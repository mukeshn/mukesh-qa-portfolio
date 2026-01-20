"use client";

import { Container, Typography, Card, CardContent, Box } from "@mui/material";

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
        {skills.map((skill) => (
          <Card key={skill.title}>
            <CardContent>
              <Typography fontWeight="bold">{skill.title}</Typography>
              <Typography color="text.secondary">
                {skill.items}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  );
}
