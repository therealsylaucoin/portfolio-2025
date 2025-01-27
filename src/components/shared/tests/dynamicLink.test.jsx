import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { useTranslation } from "react-i18next";
import DynamicLink from "../dynamicLink";

vi.mock("react-i18next", () => ({
  useTranslation: vi.fn(),
}));

describe("DynamicLink", () => {
  it("renders the link with correct props and translation", () => {
    const mockT = vi.fn((key) => {
      if (key === "linkText") return "Translated Link Text";
    });

    (useTranslation).mockReturnValue({ t: mockT });

    const props = {
      t: "linkText",
      href: "www.dynamicLink.com",
      ariaLabel: "Dynamic Link",
    };

    render(<DynamicLink {...props} />);

    const linkElement = screen.getByRole("link", { name: /Dynamic Link/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "www.dynamicLink.com");
    expect(screen.getByText("Translated Link Text")).toBeInTheDocument();
  });
});