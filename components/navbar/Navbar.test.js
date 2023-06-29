import Navbar from "./Navbar";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { useRouter } from 'next/router';

// mock useRouter
jest.mock('next/router', () => ({
    useRouter: jest.fn()
}))

// setup a new mocking function for push method
const pushMock = jest.fn()

// mock a return value on useRouter
useRouter.mockReturnValue({
    query: {},
// return mock for push method
    push: pushMock,
// ... add the props or methods you need
})


describe('<Navbar />', () => {
  it('renders heading without crashing', () => {
    useRouter.mockReturnValue({ query: {}})
    render(<Navbar/>);

    const heading = screen.getByRole('heading')

    expect(heading).toHaveTextContent("ABEL.")
  });
  
  it('renders email link without crashing', () => {
    useRouter.mockReturnValue({ query: {}})
    render(<Navbar/>);

    const link = screen.getByRole('link')

    expect(link).toHaveAttribute("href", "mailto:abel.d.otegbola@gmail.com")
  });

});