import Card from "./card"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Link from "next/link";

const defaultProps = {
    project: {
      id: '00975694-7b26-4cdc-83d7-a6bdd783c987',
      title: 'Next app',
      img: 'https://randomuser.me/api/portraits/women/19.jpg',
      summary: 'A nextjs project bootstrapped with create-next-app',
      description: "Anextjs project bootstrapped with create-next-app",
      github: "project link",
      live: "project link",
      tech: ["html", "css", "js"]
    }
};

describe('<Card />', () => {
    it('renders without crashing', () => {
        render(<Card project={ defaultProps.project } />)

        const card = screen.getByTestId('card')

        expect(card).toBeInTheDocument()
    })

    it('renders a title, summary, description', () => {
        render(<Card project={ defaultProps.project } />)
        
        const card = screen.getByTestId('card');

        expect(card).toHaveTextContent(defaultProps.project.title);
        expect(card).toHaveTextContent(defaultProps.project.summary || defaultProps.project.description)
    });

    it('renders tech stacks', () => {
        render(<Card project={ defaultProps.project } />)
        
        const card = screen.getByTestId('card');

        defaultProps.project.tech.forEach(skill => (
            expect(card).toHaveTextContent(skill)
        ))
    });

    
    it('renders href for links', () => {
        render(<Card project={ defaultProps.project } />)
        
        const link = screen.getAllByTestId('link');

        link.forEach(item => (
            expect(item).toHaveAttribute("href", defaultProps.project.github)
        ))

    });

})