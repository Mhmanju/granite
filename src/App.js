import React, { Suspense } from "react";
import "./styles.css";

import Pages from "./pages";
import { Box } from "@material-ui/core";
export default function App() {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Box height="100vh">
        <Pages />
      </Box>
    </Suspense>
  );
}
