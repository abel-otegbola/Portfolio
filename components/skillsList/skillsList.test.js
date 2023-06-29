import SkillsList from "./skillsList"
import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'

const defaultProps = {
    skills: [ "html", "css", "js", "react" ],
    heading: "Skill heading"
}

describe('<SkillsList />', () => {
    it('renders heading element', () => {
        render(<SkillsList {...defaultProps} />)

        const heading = screen.getByRole('heading')

        expect(heading).toHaveTextContent(defaultProps.heading)
    })

    it('renders each skills', () => {
        render(<SkillsList {...defaultProps}/>)
        
        const skillsList = screen.getByTestId('skills');

        defaultProps.skills.forEach(skill => (
            expect(skillsList).toHaveTextContent(skill)
        ))
    });
})