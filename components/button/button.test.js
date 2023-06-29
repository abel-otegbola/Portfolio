import Button from "./button"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'


describe('<Button />', () => {
    it('renders without crashing', () => {
        render(<Button />)

        const button = screen.getByRole('button')

        expect(button).toBeInTheDocument()
    })

    it('contains a text', () => {
        render(<Button text={"Hello World"}/>)
        
        const button = screen.getByRole('button');

        expect(button).toHaveTextContent("Hello World");
    });
})