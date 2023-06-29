import NavMenu from "./NavMenu";
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { useRouter } from 'next/router';
import { FaBriefcase, FaGithub, FaHandHolding, FaLightbulb, FaMedal } from "react-icons/fa";

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

const defaultProps = { 
    links: ["ABOUT",  "SKILLS", "PORTFOLIO","CONTRACT PROJECTS", "SIDE PROJECTS", "OPEN SOURCE CONTRIBUTIONS", "VOLUNTEER PROJECTS", "HACKATHONS PROJECTS", "CONTACT", ]
};

describe('<NavMenu />', () => {
  it('renders without crashing', () => {
    useRouter.mockReturnValue({ query: {}})
    render(<NavMenu {...defaultProps}/>);

    const listItem = screen.getAllByRole('listitem')

    listItem.forEach((element,i) => {
        expect(element).toHaveTextContent(defaultProps.links[i])
    });
  });

});