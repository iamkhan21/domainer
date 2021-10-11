import { render, screen } from "@testing-library/svelte";
import Footer from "../Footer.svelte";

describe("<Footer />", () => {
  test("Should include the text 'This is a test component.'", () => {
    render(Footer);
    expect(screen.getByText(/8byte.agency/i)).toBeInTheDocument();
  });
});
