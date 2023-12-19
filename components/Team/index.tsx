
const Team = () => {
  return (
    <section>
      <div className="container mx-auto py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 mb-20" />
        <div className="grid grid-cols-1 pb-8 text-center -mt-20 mb-20">
          <h3 className="mb-6 md:text-4xl text-2xl md:leading-none text-white leading-none font-bold mt-10">
            The Core Team
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto">
            Solid foundations of honesty and transparency.
          </p>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-4 p-4 ">
          <div className="card">
            <img
              alt=""
              fetchPriority="high"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="object-cover text-white w-32 h-32 rounded-full ring-4 ring-[#5046e4]"
              style={{ color: "transparent" }}
              src="/images/GEORGEDARLINGTON.svg"
            />
            <div className="text-white text-lg font-semibold mt-3">
              George Darlington
            </div>
            {/* <div className="text-slate-400 text-sm -mb-2">Developer</div> */}
            <div className="text-slate-400 text-sm">Chief technology officer  </div>
            <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/GergeDarlington"
                className="mx-2 text-gray dark:text-gray hover:text-gray dark:hover:text-gray group-hover:text-white"
                aria-label="Facebook"
              >
                <button className="bg-gradient-to-r from-transparent to-indigo-600/20 text-indigo-600 text-center rounded-full p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={100}
                    height={100}
                    viewBox="0 0 50 50"
                  >
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
                  </svg>{" "}
                </button>
              </a>
            </div>
          </div>
          <div className="card">
            <img
              alt=""
              fetchPriority="high"
              width={100}
              height={100}
              decoding="async"
              data-nimg={1}
              className="object-cover text-white w-32 h-32 rounded-full ring-4 ring-[#5046e4]"
              style={{ color: "transparent" }}
              src="/images/ROBERT.svg"
/>
            <div className="text-white text-lg font-semibold mt-3">
              Robert Smith
            </div>
            {/* <div className="text-slate-400 text-sm -mb-2">Developer</div> */}
            <div className="text-slate-400 text-sm">Chief marketing officer</div>
            <div className="flex items-center justify-center gap-3 mt-2 w-auto h-5 text-gray-600">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://x.com/surp00_surp00"
                className="mx-2 text-gray dark:text-gray hover:text-gray dark:hover:text-gray group-hover:text-white"
                aria-label="Facebook"
              >
                <button className="bg-gradient-to-r from-transparent to-indigo-600/20 text-indigo-600 text-center rounded-full p-2 font-semibold text-white inline-flex items-center space-x-2 rounded-full">
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width={100}
                    height={100}
                    viewBox="0 0 50 50"
                  >
                    <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
