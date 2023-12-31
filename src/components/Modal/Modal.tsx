import React, { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'

import { XMarkIcon } from '@heroicons/react/24/solid'

type Props = {
  isOpen: boolean
  closeModal: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, closeModal, children }: Props) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded bg-white p-4 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute top-4 right-4 flex justify-center items-center w-8 h-8"
                  onClick={closeModal}
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default Modal
