import { twMerge } from 'tailwind-merge'
import { StarIcon } from '@heroicons/react/24/solid'

type Props = {
  rating: number
}

const Rating = ({ rating }: Props) => {
  const fiveStar = new Array(5).fill(5)

  return (
    <div className="flex items-center gap-[2px]">
      {fiveStar.map((_, index) => (
        <StarIcon
          key={`star-${index}`}
          className={twMerge(
            'w-4 h-4 text-[#d1d1d1]',
            index + 1 <= Math.floor(rating) && 'text-[#1b1b1b]'
          )}
        />
      ))}
    </div>
  )
}

export default Rating
