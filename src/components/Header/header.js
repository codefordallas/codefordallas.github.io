import React from "react";
import "./header.css";
import Nav from "../Nav/nav";

// eslint-disable-next-line react/prop-types
export default function Header({ setActiveNavStr }) {
  return (
    <section id="Header">
      <Nav setActiveNavStr={setActiveNavStr} />
      <h1>Code For Dallas</h1>
    </section>
  );
}
