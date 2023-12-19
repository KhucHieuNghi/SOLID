"use client";

const Roadmap = () => {

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="container mb-20 mt-20">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-6 mt-10 text-2xl font-bold leading-none text-white md:text-4xl md:leading-none">
            SB New Roadmap
          </h3>
          <p className="mx-auto max-w-xl text-slate-400">
            The right path to success.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[22px] top-14 h-[calc(100%_-_32px)] w-px bg-[#1a283d] lg:left-auto lg:right-0 lg:top-[22px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            />
            <div className="flex inline-flex h-12 w-12 shrink-0 cursor-pointer flex-row items-center items-center items-center justify-center justify-center justify-center rounded-full rounded-full rounded-full bg-gradient-to-r from-transparent to-indigo-600/20 text-center text-dark text-indigo-600 duration-300 ease-linear ease-linear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-green h-6 w-6"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="ml-6 mt-1 lg:ml-0 lg:mt-4">
              <button className="relative items-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-sky-500 shadow ring-1 ring-[#1a283d] transition duration-150 ease-in-out">
                <span className="absolute -right-2 -top-3 h-3 w-3">
                  <span className="bg-green absolute -right-1 -top-0 inline-flex h-5 w-5 animate-ping rounded-full opacity-75" />
                  <span className="bg-green relative inline-flex h-3 w-3 rounded-full" />
                </span>
                <span className="uppercase text-white">PHASE-01</span>
              </button>
              <h5 className="mt-2 text-base text-sm text-black dark:text-body-color">
                <li className="mb-1">
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="mt-1 text-[#0AFBFD] dark:text-[#0AFBFD]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-2 truncate">Exclusive NFTs</span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="mt-1 text-[#0AFBFD] dark:text-[#0AFBFD]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-2 truncate">Launch on UniSwap</span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="mt-1 text-[#0AFBFD] dark:text-[#0AFBFD]"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-2 truncate">Contract audit</span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-2 truncate">CMC listing</span>
                  </a>
                </li>
              </h5>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[22px] top-14 h-[calc(100%_-_32px)] w-px bg-[#1a283d] lg:left-auto lg:right-0 lg:top-[22px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            />
            <div className="hover:text-green flex inline-flex h-12 w-12 shrink-0 cursor-pointer flex-row items-center items-center items-center justify-center justify-center justify-center rounded-full rounded-full rounded-full bg-gradient-to-r from-transparent to-indigo-600/20 text-center text-dark text-indigo-600 duration-300 ease-linear ease-linear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="ml-6 mt-1 lg:ml-0 lg:mt-4">
              <button className="relative cursor-not-allowed items-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-sky-500 shadow ring-1 ring-[#1a283d] transition duration-150 ease-in-out">
                <span className="uppercase text-slate-400">PHASE-02</span>
              </button>
              <h5 className="mt-2 text-base text-sm text-black dark:text-body-color">
                <li className="mb-1">
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                      UBIX patnership, Listing
                    </span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                      Decentralmine DCM
                    </span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                DCM presale
                    </span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                      Launch on Pancake
                    </span>
                  </a>
                </li>
              </h5>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[22px] top-14 h-[calc(100%_-_32px)] w-px bg-[#1a283d] lg:left-auto lg:right-0 lg:top-[22px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            />
            <div className="hover:text-green flex inline-flex h-12 w-12 shrink-0 cursor-pointer flex-row items-center items-center items-center justify-center justify-center justify-center rounded-full rounded-full rounded-full bg-gradient-to-r from-transparent to-indigo-600/20 text-center text-dark text-indigo-600 duration-300 ease-linear ease-linear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="ml-6 mt-1 lg:ml-0 lg:mt-4">
              <button className="relative cursor-not-allowed items-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-sky-500 shadow ring-1 ring-[#1a283d] transition duration-150 ease-in-out">
                <span className="uppercase text-slate-400">PHASE-03</span>
              </button>
              <h5 className="mt-2 text-base text-sm text-black dark:text-body-color">
                <li className="mb-1">
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                      Mining Farm Setup
                    </span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">C C Development</span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">SB Top Exchange listing</span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate"> Rise of global Communities
              
                    </span>
                  </a>
                </li>
              </h5>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[22px] top-14 h-[calc(100%_-_32px)] w-px bg-[#1a283d] lg:left-auto lg:right-0 lg:top-[22px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            />
            <div className="hover:text-green flex inline-flex h-12 w-12 shrink-0 cursor-pointer flex-row items-center items-center items-center justify-center justify-center justify-center rounded-full rounded-full rounded-full bg-gradient-to-r from-transparent to-indigo-600/20 text-center text-dark text-indigo-600 duration-300 ease-linear ease-linear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="ml-6 mt-1 lg:ml-0 lg:mt-4">
              <button className="relative cursor-not-allowed items-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-sky-500 shadow ring-1 ring-[#1a283d] transition duration-150 ease-in-out">
                <span className="uppercase text-slate-400">PHASE-04</span>
              </button>
              <h5 className="mt-2 text-base text-sm text-black dark:text-body-color">
                <li className="mb-1">
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                  LLC in Dubai
                    </span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                      cloud computing launch
                      
                    </span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                    Global Patnership and Marketing
                    </span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                    App Development
                    </span>
                  </a>
                  
                </li>
              </h5>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[22px] top-14 h-[calc(100%_-_32px)] w-px bg-[#1a283d] lg:left-auto lg:right-0 lg:top-[22px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            />
            <div className="hover:text-green flex inline-flex h-12 w-12 shrink-0 cursor-pointer flex-row items-center items-center items-center justify-center justify-center justify-center rounded-full rounded-full rounded-full bg-gradient-to-r from-transparent to-indigo-600/20 text-center text-dark text-indigo-600 duration-300 ease-linear ease-linear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="ml-6 mt-1 lg:ml-0 lg:mt-4">
              <button className="relative cursor-not-allowed items-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-sky-500 shadow ring-1 ring-[#1a283d] transition duration-150 ease-in-out">
                <span className="uppercase text-slate-400">PHASE-05</span>
              </button>
              <h5 className="mt-2 text-base text-sm text-black dark:text-body-color">
                <li className="mb-1">
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                      Reward Pool
                    </span>
                  </a>
                  <a className="w-fill flex">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth={0}
                      viewBox="0 0 1024 1024"
                      className="text-blue dark:text-blue mt-1"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" />
                    </svg>
                    <span className="ml-1 truncate">
                    Market cap,Team and Roadmap
                    </span>
                  </a>
                
                  
                </li>
              </h5>
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[22px] top-14 h-[calc(100%_-_32px)] w-px bg-[#1a283d] lg:left-auto lg:right-0 lg:top-[22px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            />
            <div className="hover:text-green flex inline-flex h-12 w-12 shrink-0 cursor-pointer flex-row items-center items-center items-center justify-center justify-center justify-center rounded-full rounded-full rounded-full bg-gradient-to-r from-transparent to-indigo-600/20 text-center text-dark text-indigo-600 duration-300 ease-linear ease-linear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="ml-6 mt-1 lg:ml-0 lg:mt-4">
              <button className="relative cursor-not-allowed items-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-sky-500 shadow ring-1 ring-[#1a283d] transition duration-150 ease-in-out">
                <span className="uppercase text-slate-400">COMING SOON</span>
              </button>
              
            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[22px] top-14 h-[calc(100%_-_32px)] w-px bg-[#1a283d] lg:left-auto lg:right-0 lg:top-[22px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            />
            <div className="hover:text-green flex inline-flex h-12 w-12 shrink-0 cursor-pointer flex-row items-center items-center items-center justify-center justify-center justify-center rounded-full rounded-full rounded-full bg-gradient-to-r from-transparent to-indigo-600/20 text-center text-dark text-indigo-600 duration-300 ease-linear ease-linear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="ml-6 mt-1 lg:ml-0 lg:mt-4">
              <button className="relative cursor-not-allowed items-center rounded-md px-4 py-2 text-sm font-semibold leading-6 text-sky-500 shadow ring-1 ring-[#1a283d] transition duration-150 ease-in-out">
                <span className="uppercase text-slate-400">COMING SOON</span>
              </button>

            </div>
          </li>
          <li className="flex-start group relative flex lg:flex-col">
            <span
              className="absolute left-[22px] top-14 h-[calc(100%_-_32px)] w-px bg-[#1a283d] lg:left-auto lg:right-0 lg:top-[22px] lg:h-px lg:w-[calc(100%_-_72px)]"
              aria-hidden="true"
            />
            <div className="hover:text-green flex inline-flex h-12 w-12 shrink-0 cursor-pointer flex-row items-center items-center items-center justify-center justify-center justify-center rounded-full rounded-full rounded-full bg-gradient-to-r from-transparent to-indigo-600/20 text-center text-dark text-indigo-600 duration-300 ease-linear ease-linear">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
           
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Roadmap;