import BasketPopover from '../BasketPopover'

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white flex justify-between items-center border-b border-b-black px-1 py-2 z-20">
      <h1 className="text-3xl font-black text-gray-800">
        <a href="/">Product Logo</a>
      </h1>
      <BasketPopover />
    </div>
  )
}

export default Navbar
