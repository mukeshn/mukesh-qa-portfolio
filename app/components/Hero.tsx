import { Container, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Container sx={{ textAlign: "center", mt: 10 }}>
      <Typography variant="h3" fontWeight="bold">
        Mukesh Ningadali
      </Typography>

      <Typography variant="h5" color="text.secondary" mt={2}>
        Senior SDET | Automation Architect | 9+ Years Experience
      </Typography>

      <Typography mt={3} maxWidth="700px" mx="auto">
        I build scalable test automation frameworks and help teams deliver
        high-quality software with confidence.
      </Typography>

      <Button variant="contained" sx={{ mt: 4 }}>
        Download Resume
      </Button>
    </Container>
  );
}
