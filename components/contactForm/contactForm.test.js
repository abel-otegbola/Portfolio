import ContactForm from "./contactForm";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'


describe('<Navbar />', () => {
  it('renders form element without crashing', () => {
    render(<ContactForm />);

    const form = screen.getByRole('form')

    expect(form).toBeInTheDocument()
  });
  
  it('renders action endpoint without crashing', () => {
    render(<ContactForm />);

    const form = screen.getByRole('form')

    expect(form).toHaveAttribute("action", "https://formilio.com/api/endpoint/57c1z43qvy")
  });

});