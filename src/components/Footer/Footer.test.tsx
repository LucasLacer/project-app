import Footer from "./Footer"
import { render, screen } from "@testing-library/react"

test("print passed title", () => {
    render(<Footer />);
    const footer = screen.getByRole("heading", { level: 2 });
    expect(footer.textContent).toBe("Home Page");
});
