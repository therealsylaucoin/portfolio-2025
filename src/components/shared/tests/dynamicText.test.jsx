import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useTranslation } from "react-i18next";
import DynamicText from "../dynamicText";

// Mock the useTranslation hook
vi.mock("react-i18next", () => ({
  useTranslation: vi.fn(),
}));

describe("DynamicText", () => {
  it("renders the default <p> element with the translated text", () => {
    const mockT = vi.fn((key) => {
      if (key === "defaultText") return "Translated Default Text";
    });

    (useTranslation).mockReturnValue({ t: mockT });

    render(<DynamicText t="defaultText" />);

    const paragraph = screen.getByText("Translated Default Text");
    expect(paragraph).toBeInTheDocument();
    expect(paragraph.tagName).toBe("P");
  });

  it("renders the correct element type with the translated text", () => {
    const mockT = vi.fn((key) => {
      if (key === "headingText") return "Translated Heading Text";
    });

    (useTranslation).mockReturnValue({ t: mockT });

    render(<DynamicText t="headingText" type="h1" />);

    const heading = screen.getByText("Translated Heading Text");
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe("H1");
  });

  it("falls back to <p> when type is not provided", () => {
    const mockT = vi.fn((key) => {
      if (key === "fallbackText") return "Translated Fallback Text";
    });

    (useTranslation).mockReturnValue({ t: mockT });

    render(<DynamicText t="fallbackText" />);

    const fallbackElement = screen.getByText("Translated Fallback Text");
    expect(fallbackElement).toBeInTheDocument();
    expect(fallbackElement.tagName).toBe("P");
  });
});
