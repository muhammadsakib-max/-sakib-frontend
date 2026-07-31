import React from "react";
import { Button } from "@heroui/react";
const Hero = () => {
  return (
    <>
      <div>
        <div>
          <Button variant="outline">Available for work — Q4 2026</Button>
          <h1>
            Interfaces that load fast, read clearly and <span>hold up</span>{" "}
            after launch.
          </h1>
          <p>
            I'm Sakib, a frontend developer in Bhola, Bangladesh. I turn design
            files into responsive, accessible front-ends — clean markup, real
            CSS architecture, and JavaScript only where it earns its place.
          </p>
          <Button>Start a Project</Button>
          <Button variant="outline">See selected work</Button>
        </div>
        <div>
            <img src="https://images.unsplash.com/photo-1682685794700-1f3e7c5d8b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
