import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mt-[72px] text-center p-10">
      <h2 className='text-4xl font-bold'>Not Found</h2>
      <p className='text-xl font-medium mb-4'>Could not find the product</p>
      <Link href="/" className='underline'>Return Home</Link>
    </div>
  )
}
