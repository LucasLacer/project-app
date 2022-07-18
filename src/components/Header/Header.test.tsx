import Header from "./Header"
import { render, screen } from "@testing-library/react"

test("print passed title", () => {
    render(<Header title={'test'} />);
    const header = screen.getByRole("heading", { level: 1 });
    expect(header.textContent).toBe("test");
});
