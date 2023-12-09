import { render, screen } from '@testing-library/react'

import Navbar from '../Navbar'

describe('Navbar component', () => {
  it('should have Product Logo', () => {
    render(<Navbar />)

    const element = screen.getByText('Product Logo')

    expect(element).toBeInTheDocument()
  })

  it('should have Shopping cart button', () => {
    render(<Navbar />)

    const element = screen.getByTestId('shopping-cart')

    expect(element).toBeInTheDocument()
  })
})
