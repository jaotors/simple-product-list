import { render, screen } from '@testing-library/react'
import ProductCard from '../ProductCard'

describe('Product Card component', () => {
  const props = {
    title: 'Product Card Title',
    price: 20,
    discountPercentage: 2.5,
    rating: 4.5,
    stock: 100,
    brand: 'Brand',
    image: '/imagepath',
  }

  it('should display the title', () => {
    render(<ProductCard {...props} />)

    const element = screen.getByText('Product Card Title')

    expect(element).toBeInTheDocument()
  })

  it('should display the computed price', () => {
    render(<ProductCard {...props} />)

    const element = screen.getByText('PHP 19.50')

    expect(element).toBeInTheDocument()
  })
})
