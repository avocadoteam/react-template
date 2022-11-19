import { render, screen } from "@testing-library/react";
import { DivCenter } from "./DivCenter";

describe("Test DivCenter component", () => {
  let wrapper: HTMLElement;
  beforeEach(() => {
    render(<DivCenter>test div</DivCenter>);
    wrapper = screen.getByTestId("div-center");
  });
  test("render component", () => {
    expect(wrapper).toBeInTheDocument();
  });
  test("display equal to flex", () => {
    expect(wrapper.style).toHaveProperty("display", "flex");
  });
  test("flexDirection equal to row", () => {
    expect(wrapper.style).toHaveProperty("flexDirection", "row");
  });
  test("justifyContent equal to center", () => {
    expect(wrapper.style).toHaveProperty("justifyContent", "center");
  });
  test("textAlign equal to center", () => {
    expect(wrapper.style).toHaveProperty("textAlign", "center");
  });
});
