import Footer from "./Footer"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'


describe('<Footer />', () => {
    it('renders without crashing', () => {
        render(<Footer />)

        const button = screen.getByTestId('footer')

        expect(button).toBeInTheDocument()
    })
})