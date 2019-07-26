import React from "react";
import "../styles/App.css";

// styling
import Container from "@material-ui/core/Container";

// app components
import DisplaySmurfs from "./DisplaySmurfs";
import Header from "../ui/Header";

export default function App() {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <DisplaySmurfs />
      </Container>
    </>
  );
}
