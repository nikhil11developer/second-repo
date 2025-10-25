import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("renders the React app", () => {
    render(<App />);
    const element = screen.getByText(/babu/i);
    expect(element).toBeInTheDocument();
  });
});
