'use client'

import Link from 'next/link'
import Image from 'next/image'

import Rating from '../Rating'

import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline'

type Props = {
  image: string
  brand: string
  title: string
  price: number
  rating: number
  stock: number
  discountPercentage: number
}

const ProductCard = ({
  title,
  brand,
  image,
  price,
  rating,
  stock,
  discountPercentage,
}: Props) => {
  const hasDiscount = discountPercentage > 0
  const discountedPrice = price - price * (discountPercentage / 100)
  const isOutOfStock = stock < 1

  return (
    <Link
      href="id/notfound"
      aria-disabled={isOutOfStock}
      className="shadow-custom"
    >
      <div className="bg-transparent rounded text-[#1b1b1b]">
        <div className="bg-white rounded-t p-4">
          <div className="relative mb-4 overflow-hidden max-w-[268px] max-h-[268px]">
            <Image
              src={image}
              width={268}
              height={268}
              alt={`${title}-product-card`}
            />
            {hasDiscount && (
              <span className="absolute bottom-2 left-2 text-[#da0000] font-bold text-xs z-10">
                -{discountPercentage.toFixed(2)}%
              </span>
            )}
            <div className="absolute bottom-2 right-2 flex flex-col gap-2 z-10">
              <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-custom">
                <ShareIcon className="w-3.5 h-3.5" />
              </button>
              <button className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-custom">
                <HeartIcon className="w-3.5 h-3.5" />
              </button>
            </div>
            {isOutOfStock && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#1b1b1b] z-10">
                <p className="font-bold text-sm text-white px-2 py-1">
                  Out of stock
                </p>
              </div>
            )}
          </div>
          <div className="text-left mb-4">
            <h3 className="text-[#606060]">{brand}</h3>
            <h2>{title}</h2>
          </div>
          <h2 className="flex gap-2 font-medium text-base mb-4">
            {hasDiscount && (
              <span className="line-through font-normal">
                PHP {price.toFixed(2)}
              </span>
            )}
            <span>PHP {discountedPrice.toFixed(2)}</span>
          </h2>
          <div className="flex items-center gap-2">
            <Rating rating={rating} />
            <span className="flex gap-1 text-[#606060] font-medium">
              {rating.toFixed(1)}
              <span className="font-normal">({stock})</span>
            </span>
          </div>
        </div>
        <div className="border-t-[1px] border-t-[#606060] bg-white rounded-b">
          <button
            onClick={evt => {
              evt.preventDefault()
              console.log('test')
            }}
            disabled={isOutOfStock}
            className="px-4 py-2 w-100 font-medium uppercase disabled:text-[#606060]"
          >
            Add to basket
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
