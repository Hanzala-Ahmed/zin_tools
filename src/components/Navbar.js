import Image from 'next/image';

export default function Navbar() {
  return (
    <div>
      <nav className='border-gray-20 bg-gray-50'>
        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>
          <a href='#' className='flex items-center space-x-3 rtl:space-x-reverse'>
            <img
              src='https://flowbite.com/docs/images/logo.svg'
              className='h-8'
              alt='Flowbite Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap text-black'>
              ZinTools
            </span>
          </a>
          <div>
            <form className='w-96 max-sm:w-[350px] my-2'>
              <div className='flex'>
                <div className='relative w-full'>
                  <input
                    className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 border-l-gray-200 rounded-lg border-s-gray-50 border-s-2 border border-gray-200 focus:outline-none '
                    placeholder='Search Mockups, Logos, Design Templates...'
                    required
                  />
                  <button
                    type='submit'
                    className='absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-black rounded-e-lg border border-gray-200'>
                    <svg
                      className='w-4 h-4'
                      aria-hidden='true'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 20 20'>
                      <path
                        stroke='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                      />
                    </svg>
                    <span className='sr-only'>Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className='flex items-center  space-x-6 rtl:space-x-reverse'>
            <a href='#' className='text-sm  text-blue-600 dark:text-blue-500 hover:underline'>
              Login
            </a>
            <button
              type='button'
              className='text-white bg-indigo-400 hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center '>
              Sign up
            </button>
          </div>
        </div>
      </nav>
      <nav className='bg-gray-50 '>
        <div className='max-w-screen-xl px-5 py-3 mx-auto'>
          <div className='flex items-center justify-center'>
            <ul className='flex flex-row justify-around flex-wrap font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm'>
              <li className='my-2'>
                <a href='#' className=' hover:underline' aria-current='page'>
                  Stack Video
                </a>
              </li>
              <li className='my-2'>
                <a href='#' className=' hover:underline'>
                  Video Template
                </a>
              </li>
              <li className='my-2'>
                <a href='#' className=' hover:underline'>
                  Music
                </a>
              </li>
              <li className='my-2'>
                <a href='#' className='hover:underline'>
                  Sound Effects
                </a>
              </li>
              <li className='my-2'>
                <a href='#' className='hover:underline'>
                  Graphics Templates
                </a>
              </li>
              <li className='my-2'>
                <a href='#' className='hover:underline'>
                  Graphics{' '}
                </a>
              </li>
              <li className='my-2'>
                <a href='#' className='hover:underline'>
                  Presentation Templates{' '}
                </a>
              </li>
              <li className='my-2'>
                <a href='#' className='hover:underline'>
                  Photos
                </a>
              </li>
              <li className='my-2'>
                <a href='#' className='hover:underline'>
                  Fonts
                </a>
              </li>
              <li className='my-2'>
                <a href='#' className='hover:underline'>
                  Add ons
                </a>
              </li>
              <li className='my-2'>
                <a href='#' className='hover:underline'>
                  More
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
