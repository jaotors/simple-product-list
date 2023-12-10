export const getProducts = async () => {
  const data = fetch('https://dummyjson.com/products/search?q=fashion').then(
    res => res.json()
  )

  return data
}
