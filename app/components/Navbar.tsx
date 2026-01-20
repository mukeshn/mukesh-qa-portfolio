"use client";

import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mukesh Ningadali
        </Typography>

        <Box>
          <Button color="inherit">About</Button>
          <Button color="inherit">Skills</Button>
          <Button color="inherit">Experience</Button>
          <Button color="inherit">Projects</Button>
          <Button color="inherit">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
