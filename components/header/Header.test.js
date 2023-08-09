import Sidebar from "./Sidebar";
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

const defaultProps = { header: 'Hello World' };

describe('<Sidebar />', () => {
  it('renders without crashing', () => {
    useRouter.mockReturnValue({ query: {}})
    render(<Sidebar {...defaultProps}/>);

    const heading = screen.getAllByRole('heading')

    heading.forEach(item => {
        expect(item).toBeInTheDocument()
    })
  });

  it('renders social media links', () => {
    useRouter.mockReturnValue({ query: {}})
    render(<Sidebar {...defaultProps}/>);
    
    const links = screen.getAllByRole('link')

    links.forEach(item => {
        expect(item).toBeInTheDocument()
    })
  });

});