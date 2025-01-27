import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useTranslation } from "react-i18next";
import AboutSection from "../aboutSection";
import DynamicText from "../../shared/dynamicText";

vi.mock("react-i18next", () => ({
  useTranslation: vi.fn(),
}));

vi.mock("../../shared/dynamicText", () => ({
  default: vi.fn(() => <div>DynamicTextMock</div>),
}));

describe("AboutSection", () => {
  it("renders loading text when translations are not ready", () => {
    (useTranslation).mockReturnValue({ t: vi.fn(), ready: false });
    render(<AboutSection />);

    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("renders about content when translations are ready", () => {
    const mockAbout = [
      { type: "heading", copy: "About Me" },
      { type: "paragraph", copy: "I am a software engineer." },
    ];
    const mockT = vi.fn((key) => {
      if (key === "about") return mockAbout;
      if (key === "headshotAriaLabel") return "Headshot of Syl";
    });

    (useTranslation).mockReturnValue({ t: mockT, ready: true });
    render(<AboutSection />);

    expect(DynamicText).toHaveBeenCalledTimes(mockAbout.length);
    expect(DynamicText).toHaveBeenNthCalledWith(1, { type: "heading", t: "About Me" }, {});
    expect(DynamicText).toHaveBeenNthCalledWith(2, { type: "paragraph", t: "I am a software engineer." }, {});
    const img = screen.getByRole("img", { name: /Headshot of Syl/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "src/assets/headshot.png");
  });
});
