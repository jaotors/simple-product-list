import Image from 'next/image'

import { XMarkIcon } from '@heroicons/react/24/solid'

type Props = {
  title: string
  price: number
  image: string
}

const NotificationCard = ({ title, price, image }: Props) => {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h2 className="text-lg font-medium">Successfully added to basket</h2>
      </div>
      <div className="flex gap-2 items-center">
        <div className="overflow-hidden max-w-[64px] max-h-[64px]">
          <Image
            src={image}
            width={64}
            height={64}
            alt={`${title}-product-preview`}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="font-medium">PHP {price.toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export default NotificationCard
