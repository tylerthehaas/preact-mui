import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "./ProTip";
import Copyright from "./Copyright";
import { TextField } from "@mui/material";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Preact example
        </Typography>
        <TextField defaultValue="test" />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
