import { getProducts } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

type ProductItem = {
  id: number
  title: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  thumbnail: string
}

export default async function Home() {
  const data = await getProducts()

  return (
    <div className="mt-[72px] text-center">
      <section className="container p-4 lg:w-[80%] mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {data.products.map((product: ProductItem, index: number) => (
            <ProductCard
              key={`${product.title}-${index}`}
              title={product.title}
              price={product.price}
              discountPercentage={product.discountPercentage}
              rating={product.rating}
              stock={index === 0 ? 0 : product.stock}
              brand={product.brand}
              image={product.thumbnail}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
