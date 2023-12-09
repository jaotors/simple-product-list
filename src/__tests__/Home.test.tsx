import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home Page', () => {
  it('should have Hello World text', () => {
    render(<Home />)

    const element = screen.getByText('Hello World')

    expect(element).toBeInTheDocument()
  })

  it('should have NextJS text', () => {
    render(<Home />)

    const element = screen.getByText(/NextJS/i)

    expect(element).toBeInTheDocument()
  })

  it('should have a heading', () => {
    render(<Home />)

    const element = screen.getByRole('heading', {
      name: /learn test/i,
    })

    expect(element).toBeInTheDocument()
  })
})
