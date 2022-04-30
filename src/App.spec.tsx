import App from "./App";
import { render, screen } from "@testing-library/react";

const testFn = () => {
  const { container } = render(<App />);
  expect(container.firstChild).toBeDefined();
  expect(container).toBeInTheDocument();
};

describe("App", () => {
  it.each([...Array(100).keys()])("render %d", () => {
    testFn();
  });
});
