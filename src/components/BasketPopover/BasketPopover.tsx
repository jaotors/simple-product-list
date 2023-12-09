'use client'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

import BasketList from './BaksetList'

const BasketPopover = () => {
  return (
    <Popover className="relative">
      <Popover.Button
        className="relative py-2 px-4 rounded-full border border-gray-800 bg-white hover:bg-gray-800 hover:text-white"
        data-testid="shopping-cart"
      >
        <ShoppingCartIcon className="w-6 h-10" />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute right-0 mb-1 z-10 w-screen max-w-[320px] sm:px-0 lg:max-w-3xl">
          <div className="overflow-hidden bg-white rounded shadow ring-1 ring-black/5 max-h-[400px]">
            <p className="text-lg text-center font-medium p-2">No items yet!</p>
            <>
              <div className="flex justify-end p-2 text-[0.75rem] border-b border-b-gray-800">
                <button className="border border-gray-800 rounded hover:bg-gray-800 hover:text-white p-2 capitalize">
                  Clear all
                </button>
              </div>
              <BasketList />
              <div className="flex items-center justify-between w-full p-4">
                <p className="text-md font-black">Total: 10000</p>
                <button className="border border-gray-800 rounded hover:bg-gray-800 hover:text-white px-6 py-2 uppercase">
                  Checkout
                </button>
              </div>
            </>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default BasketPopover
