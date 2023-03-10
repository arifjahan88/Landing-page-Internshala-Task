import React from "react";

const Header = () => {
  return (
    <>
      <div className="lg:hero h-[500px] bg-amber-600">
        <div className="hero-content text-center flex-col lg:mt-8">
          <div className="text-white">
            <h1 className="lg:text-5xl md:text-5xl text-3xl font-bold">
              Hello there, The Simplest Way To Incorporate <br />
              Your Company In India.
            </h1>
            <p className="py-6">Begin your journey as a business owner with us</p>
            <div className="bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-between w-full lg:w-1/3 mx-auto">
              <input
                type="text"
                placeholder="Email"
                className="bg-transparent py-1 text-gray-600 px-4 focus:outline-none w-full"
              />{" "}
              <button className="py-2 px-4 bg-white text-gray-600 rounded-r border-l border-gray-200 hover:bg-gray-50 active:bg-gray-200 disabled:opacity-50 inline-flex items-center focus:outline-none">
                Next
              </button>
            </div>

            <div>
              <div className="flex justify-center items-center my-5">
                <label
                  htmlFor="gst"
                  className="border p-3 mx-2 rounded-xl hover:bg-indigo-300 hover:cursor-pointer border-white hover:border-0 hover:text-white hover:duration-200"
                >
                  <span className="font-bold">GST Registration</span> <br />
                  $999 / <span className="text-xs">Excl GST</span>
                </label>
                <label
                  htmlFor="gst"
                  className="border p-3 mx-2 rounded-xl hover:bg-indigo-300 hover:cursor-pointer border-white hover:border-0 hover:text-white hover:duration-200"
                >
                  <span className="font-bold">GST Registration</span> <br />
                  $999 / <span className="text-xs">Excl GST</span>
                </label>
                <label
                  htmlFor="gst"
                  className="border p-3 mx-2 rounded-xl hover:bg-indigo-300 hover:cursor-pointer border-white hover:border-0 hover:text-white hover:duration-200"
                >
                  <span className="font-bold">GST Registration</span> <br />
                  $999 / <span className="text-xs">Excl GST</span>
                </label>
              </div>
            </div>
            <p className="text-center">Rated 4.8 out of 5 based on Google 1320 reviews</p>
          </div>
          <div className="hidden lg:grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div className=" flex bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <svg
                className="w-16 bg-slate-300 rounded-lg h-14 mb-2 text-gray-500 dark:text-gray-400 border p-2 absolute"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                  clip-rule="evenodd"
                ></path>
                <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path>
              </svg>
              <div className="mt-4 p-6">
                <p>
                  <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Legal
                  </h5>
                </p>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Your documents, contracts, and registrations handled by expert lawyers.
                </p>
              </div>
            </div>
            <div className="flex  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <svg
                className="w-16 bg-slate-300 rounded-lg h-14 mb-2 text-gray-500 dark:text-gray-400 border p-2 absolute"
                viewBox="0 0 24 24"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M1.79 6.255c3.939-2.066 5.753.089 5.753.089-2.289-.952-5.753-.089-5.753-.089zm6.556.089c-1.245-1.204-.595-4.787-.595-4.787-1.754 3.27.595 4.787.595 4.787zm14.821 8.8s.312.728.505 1.606l-8.548 6.452-2.343-6.373c-.704.236-2.667.723-5.506.055-3.598-.847-3.835-1.516-4.995-2.319-1.16-.803-1.962-2.497-2.156-3.152-.193-.654-.208-1.918.297-2.825.505-.907 1.903-1.501 1.903-1.501s.818-.342 2.988-.446c2.172-.104 3.614.639 3.614.639s-.788-2.601-.238-4.727S10.903.829 10.903.829s1.606.416 2.943 2.602c.885 1.445 1.177 2.263 1.274 2.654 1.535-.355 3.389-1.046 5.349-2.304 0 0 .954 2.695 3.531 10.785l-.833.578zm-11.551-7.76l.55 1.412c4.765.238 7.938-2.453 7.938-2.453l-.327-.847c-4.177 2.84-8.161 1.888-8.161 1.888zm-.776-5.66s1.182 1.691 2.096 4.62c0 0 .981.085 1.762-.227-.001 0-1.506-4.237-3.858-4.393zm-.569 6.734l.557.112-.825-2.364c2.071.228 2.341.138 2.341.138-.424-1.959-1.84-4.675-1.84-4.675-.958.144-1.136 1.293-1.136 1.293-.703 3.267.903 5.496.903 5.496zm-8.942.602c6.69 1.16 9.968 3.769 9.968 3.769L9.891 9.033S8.469 7.505 5.209 7.436c-3.244-.067-3.88 1.624-3.88 1.624zm11.016 6.657l-.728-1.951c-4.62-3.2-10.354-4.504-10.354-4.504s-.156.19-.212 1.026c-.056.836.346 1.628.948 2.598s1.762 1.594 2.564 2.099c.803.505 2.839.978 4.616 1.12 1.787.14 3.166-.388 3.166-.388zm.579-4.705c5.337-.268 7.79-2.787 7.79-2.787l-.446-1.257c-3.345 2.869-7.879 2.497-7.879 2.497l.535 1.547zm.996 2.527c4.668-.788 7.344-3.479 7.344-3.479l-.387-1.189c-3.226 2.81-7.671 2.78-7.671 2.78l.714 1.888zm.967 2.713c3.925-1.527 7.024-4.382 7.024-4.382l-.39-1.137c-3.267 2.754-7.403 3.456-7.403 3.456l.769 2.063zm7.648-2.386l-.479-1.316c-2.341 2.33-6.946 4.393-6.946 4.393l.751 1.94 6.674-5.017zm-18.01 3.077c3.687 3.062 8.08.461 8.08.461-4.72 1.085-8.08-.461-8.08-.461z" />
              </svg>
              <div className="mt-4 p-6">
                <p>
                  <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Tax
                  </h5>
                </p>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Filing returns and paying your taxes ??? made easier for you.
                </p>
              </div>
            </div>
            <div className=" flex bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <svg
                className="w-16 bg-slate-300 rounded-lg h-14 mb-2 text-gray-500 dark:text-gray-400 border p-2 absolute"
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M8 2a5.53 5.53 0 00-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 5.146a.5.5 0 01-.708.708L8.5 6.707V10.5a.5.5 0 01-1 0V6.707L6.354 7.854a.5.5 0 11-.708-.708l2-2a.5.5 0 01.708 0l2 2z" />
              </svg>
              <div className="mt-4 p-6">
                <p>
                  <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Compliance
                  </h5>
                </p>
                <p className=" mb-3 font-normal text-gray-500 dark:text-gray-400">
                  Our chartered accountants & company secretaries will keep your books in order.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="gst" className="modal-toggle" />
        <div className="modal bg-slate-200 bg-opacity-50">
          <div className="modal-box relative">
            <label htmlFor="gst" className="btn btn-sm btn-circle absolute right-2 top-2">
              ???
            </label>
            <h3 className="text-lg font-bold">GST Registration</h3>
            <p className="py-4">
              Your documents, contracts, and registrations handled by expert lawyers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
