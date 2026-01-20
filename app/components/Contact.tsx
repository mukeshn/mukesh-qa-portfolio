"use client";

import { Container, Typography, Button, Stack } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ mt: 12, mb: 10 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Contact
      </Typography>

      <Stack direction="row" spacing={2}>
        <Button variant="outlined" href="https://www.linkedin.com" target="_blank">
          LinkedIn
        </Button>
        <Button variant="outlined" href="https://github.com" target="_blank">
          GitHub
        </Button>
        <Button variant="contained" href="mailto:your@email.com">
          Email Me
        </Button>
      </Stack>
    </Container>
  );
}
