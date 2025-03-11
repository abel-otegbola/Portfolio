import { expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react';

import Button, { buttonProps } from './button';
import { describe } from 'node:test';

const defaultProps: buttonProps = {
    variant: "primary",
    className: "",
    href: "",
    size: "full",
    disabled: true,
}

describe('Button', () => {
  test('renders button with text and link from props', () => {
    render(<Button {...defaultProps} ></Button>);

    expect(screen.getByRole('button')).toBeDefined()

  });
  test('calls onClick prop when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(screen.getByText(/click me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
});