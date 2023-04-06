import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import { render, screen } from '@testing-library/react';

test("Application root", () => {
      const div = document.createElement("div");
      div.id = "root";
      document.body.appendChild(div);
      render(<App/>);

});